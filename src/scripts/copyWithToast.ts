export function copyWithToast(text: string, toastId: string) {
    const toast = document.getElementById(toastId);
    if (!toast || !text) return;

    navigator.clipboard.writeText(text);

    clearTimeout(Number(toast.dataset.timeout));
    toast.classList.remove('opacity-0');
    toast.classList.add('opacity-100');
    toast.dataset.timeout = String(setTimeout(() => {
        toast.classList.remove('opacity-100');
        toast.classList.add('opacity-0');
    }, 4000));
}
