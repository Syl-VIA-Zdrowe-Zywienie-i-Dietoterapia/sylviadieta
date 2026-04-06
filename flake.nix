{
    inputs = {
        nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
        flake-parts.url = "github:hercules-ci/flake-parts";
    };

    outputs = inputs: inputs.flake-parts.lib.mkFlake { inherit inputs; } {
        systems = [ "x86_64-linux" "x86_64-darwin" "aarch64-linux" "aarch64-darwin" ];
        perSystem = { pkgs, ... }: {
            devShells.default = pkgs.mkShell {
                packages = with pkgs; [
                    bun
                    tsgolint
                ];

                shellHook = ''
                    export BUN_BIN="${pkgs.lib.getExe pkgs.bun}"
                    export TSGOLINT_BIN="${pkgs.lib.getExe pkgs.tsgolint}"
                '';
            };
        };
    };
}
