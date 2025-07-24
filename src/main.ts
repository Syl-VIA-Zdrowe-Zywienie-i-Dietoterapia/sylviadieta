import copy from 'copy-to-clipboard';

function changeTab(event: MouseEvent, targetClass: string) {
    let currentTab = document.querySelector('.' + targetClass) as HTMLElement;
    currentTab?.classList.remove(targetClass);

    let newTab = event.currentTarget as HTMLElement;
    newTab.classList.add(targetClass);
}

function changeNavbarTab(event: MouseEvent) {
    changeTab(event, 'navbar-tab-active');
}

function changeActiveTab(event: MouseEvent) {
    changeTab(event, 'tab-active');
}

(window as any).copy = copy;
(window as any).changeNavbarTab = changeNavbarTab;
(window as any).changeActiveTab = changeActiveTab;
