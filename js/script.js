const   sideBarBtn = document.querySelector('.side-bar__btn'),
        sideBar = document.querySelector('.side-bar'), 
        pageContent = document.querySelector('.global__content'), 
        dropdownWindow = document.querySelector('.side-bar__dropdown'),
        dropdownBtn = document.querySelector('.side-bar__dropdown-btn'), 
        tabList = document.querySelector('.return__list'),
        tableTabs = document.querySelectorAll('.return__item'),
        tables = document.querySelectorAll('.table'), 
        screenMore = document.querySelector('.details__user'),
        seeMore = document.querySelector('.details__history-link'),
        historyCommit = document.querySelector('.details__history-events'),   
        warningMsg = document.querySelector('.warning'),
        warningClose = document.querySelector('.warning__close');
    
sideBarBtn.addEventListener('click', () => {
    sideBar.classList.toggle('active'); 
        if(sideBar.classList.contains('active')){  
            pageContent.style.marginLeft = "275px"; 
            tabList.classList.add("direction-column")
    }else {  
        dropdownWindow.classList.remove('active')
        pageContent.style.marginLeft = "65px";  
        tabList.classList.remove("direction-column")
    }
}); 
dropdownBtn.addEventListener('click', () => {
    dropdownWindow.classList.toggle('active'); 
    if(dropdownWindow.classList.contains('active')){
        sideBar.classList.add('change-height')
    }else sideBar.classList.remove('change-height')
})
tableTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tableTabs.forEach(el => {
            el.classList.remove('active')
        });
        tab.classList.add('active');
        tables.forEach(table => {
            table.classList.remove('show');
        });
        document.querySelector('#' + tab.getAttribute('data-table')).classList.add("show");
    })
})

 