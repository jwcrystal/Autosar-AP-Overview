/**
 * Adaptive AUTOSAR 網站主要 JavaScript 功能
 * 包含導航選單、主題切換、滾動效果等功能
 */

// 等待 DOM 完全載入
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initMobileMenu();
    initThemeToggle();
    initScrollEffects();
    initBackToTop();
});

/**
 * 初始化手機版選單功能
 */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            // 切換選單顯示/隱藏
            mobileMenu.classList.toggle('hidden');
            
            // 更新選單圖標
            const menuIcon = mobileMenuBtn.querySelector('i');
            if (menuIcon) {
                if (mobileMenu.classList.contains('hidden')) {
                    menuIcon.classList.remove('fa-times');
                    menuIcon.classList.add('fa-bars');
                } else {
                    menuIcon.classList.remove('fa-bars');
                    menuIcon.classList.add('fa-times');
                }
            }
        });
    }
}

/**
 * 初始化主題切換功能
 */
function initThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // 檢查本地儲存的主題偏好
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // 根據儲存的偏好或系統偏好設置初始主題
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    
    // 主題切換按鈕點擊事件
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function() {
            // 切換暗/亮模式
            const isDark = document.documentElement.classList.toggle('dark');
            
            // 儲存主題偏好
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
}

/**
 * 初始化滾動效果
 */
function initScrollEffects() {
    // 平滑滾動到錨點
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // 如果在手機版選單中點擊，則關閉選單
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    const menuIcon = document.querySelector('#mobile-menu-btn i');
                    if (menuIcon) {
                        menuIcon.classList.remove('fa-times');
                        menuIcon.classList.add('fa-bars');
                    }
                }
            }
        });
    });
    
    // 滾動時顯示/隱藏元素的動畫效果
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    };
    
    // 初始檢查
    animateOnScroll();
    
    // 滾動時檢查
    window.addEventListener('scroll', animateOnScroll);
}

/**
 * 初始化返回頂部按鈕
 */
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
        // 滾動時顯示/隱藏按鈕
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove('opacity-0', 'invisible');
                backToTopBtn.classList.add('opacity-100', 'visible');
            } else {
                backToTopBtn.classList.remove('opacity-100', 'visible');
                backToTopBtn.classList.add('opacity-0', 'invisible');
            }
        });
        
        // 點擊返回頂部
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

/**
 * 頁面載入進度條
 */
window.addEventListener('load', function() {
    const loader = document.getElementById('page-loader');
    if (loader) {
        // 隱藏載入進度條
        loader.classList.add('opacity-0');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});