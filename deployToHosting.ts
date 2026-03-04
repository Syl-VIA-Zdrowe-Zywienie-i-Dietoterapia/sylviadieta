import { deploy } from "@samkirkland/ftp-deploy";

async function deployToHosting() {
    await deploy({
        protocol: "ftps",
        server: process.env.FTP_SERVER!,
        username: process.env.FTP_USERNAME!,
        password: process.env.FTP_PASSWORD!,
        "local-dir": "./dist/",
        "server-dir": "/domains/sylviadieta.pl/public_html/",
        timeout: 20000,
        // "dangerous-clean-slate": true,
        // "dry-run": true,
        // "log-level": "verbose",
    });
}

deployToHosting().catch((err) => {
    console.error("Deployment failed:", err);
    process.exit(1);
});
