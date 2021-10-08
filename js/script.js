document.addEventListener("DOMContentLoaded", function() {
    try{
        $('.popular__goods').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1080,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    appendArrows: $('.goods-nav'),
                    arrows: true,
                    appendDots: $('.goods-nav'),
                    dots: true
                  }
                },
                {
                    breakpoint: 410,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      infinite: true,
                      appendArrows: $('.goods-nav'),
                      arrows: true,
                      appendDots: $('.goods-nav'),
                      dots: true
                    }
                  }
            ]
          });
          $('.product-card__slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
          });
          $('#goods-slider-1').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                  breakpoint: 1080,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    appendArrows: $('#goods-nav-1'),
                    arrows: true,
                    appendDots: $('#goods-nav-1'),
                    dots: true
                  }
                },
                {
                    breakpoint: 410,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      infinite: true,
                      appendArrows: $('#goods-nav-1'),
                      arrows: true,
                      appendDots: $('#goods-nav-1'),
                      dots: true
                    }
                  }
            ]
          });
          $('#goods-slider-2').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                  breakpoint: 1080,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    appendArrows: $('#goods-nav-2'),
                    arrows: true,
                    appendDots: $('#goods-nav-2'),
                    dots: true
                  }
                },
                {
                    breakpoint: 410,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      infinite: true,
                      appendArrows: $('#goods-nav-2'),
                      arrows: true,
                      appendDots: $('#goods-nav-2'),
                      dots: true
                    }
                  }
            ]
          });
          $('#goods-slider-3').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                  breakpoint: 1080,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    appendArrows: $('#goods-nav-3'),
                    arrows: true,
                    appendDots: $('#goods-nav-3'),
                    dots: true
                  }
                },
                {
                    breakpoint: 410,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      infinite: true,
                      appendArrows: $('#goods-nav-3'),
                      arrows: true,
                      appendDots: $('#goods-nav-3'),
                      dots: true
                    }
                  }
            ]
          });
    } catch (e) {}
   
    const modalTrigger = document.querySelectorAll('.call-trig'),
        modal = document.querySelector('.call__modal');

        modalTrigger.forEach((i) =>{
            i.addEventListener('click', openModal);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal.querySelector('.modal__dialoge') || e.target === modal.querySelector('.modal__content') || e.target === modal.querySelector('.close')){
                closeModal();
            }     
        });  

        document.addEventListener('keydown', (e) => {
            if (e.code === "Escape" && !modal.classList.contains('hide')) { 
                closeModal();
            }
        });

        function openModal () {
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        }
    
        function closeModal () {
            modal.classList.add('hide');
            document.body.style.overflow = ''; 
        }

    const catalogeMenuTrigger = document.querySelector('.cataloge-btn'),
            catalogeMenu = document.querySelector('.cataloge__nav');
    
            catalogeMenuTrigger.addEventListener('click', () => {
                catalogeMenu.classList.toggle('hide');
            });
            const mobCatalogeMenuTrigger = document.querySelector('.mob-nav__img'),
            mobCatalogeMenu = document.querySelector('.mob-menu'),
            mobCatalogeMenuClose = document.querySelector('.mob-menu__close');
    
            mobCatalogeMenuTrigger.addEventListener('click', () => {
                mobCatalogeMenu.classList.remove('hide');
                document.body.style.overflow = 'hidden';
            });
            mobCatalogeMenuClose.addEventListener('click', () => {
                mobCatalogeMenu.classList.add('hide');
                document.body.style.overflow = ''; 
            });

            const tabs = document.querySelectorAll('.cataloge-nav__link'),
            tabsContent = document.querySelectorAll('.cataloge-nav-more'),
            tabsParent = document.querySelector('.cataloge__nav');
               
            function hideTabContent() {
    
                tabsContent.forEach(item => {
                    item.classList.add('hide');
                    item.classList.remove('show');
                });
           
            }
    
            function showTabContent(i = 0) {
                tabsContent[i].classList.add('show');
                tabsContent[i].classList.remove('hide');
                tabsParent.style.width = "100%";
            }

            hideTabContent();
        
            tabsParent.addEventListener('mouseover', function(event) {
                const target = event.target;
                console.log(target);
                if(target && target.classList.contains('cataloge-nav__link')) {
                    tabs.forEach((item, i) => {
                        if (target == item) {
                            console.log(target);
                            hideTabContent();
                            showTabContent(i);
                        }
                    });
                }
            });

        const acrdion = document.querySelectorAll('.mob-menu__cataloge-header');

        acrdion.forEach((i) => {
            i.addEventListener('click', (e) => {
                let self = e.target.closest('.mob-menu__cataloge-item');
                self.classList.toggle('mob-menu__cataloge-item-active');
                self.querySelector('.mob-menu-cataloge-nav-more').classList.toggle('hide');
            })
        })
try{
        let priceRangeSlider = document.getElementById('price-filter');

        noUiSlider.create(priceRangeSlider, {
            start: [310, 425],
            connect: true,
            tooltips: [wNumb({decimals: 0}), wNumb({decimals: 0})],
            step: 1,
            range: {
                'min': 310,
                'max': 700
            }
        });
        let widthRangeSlider = document.getElementById('width-filter');

        noUiSlider.create(widthRangeSlider, {
            start: [310, 425],
            connect: true,
            tooltips: [wNumb({decimals: 0}), wNumb({decimals: 0})],
            step: 1,
            range: {
                'min': 310,
                'max': 700
            }
        });
        rangeChange('price-filter-input-0', 'price-filter-input-1', priceRangeSlider);
        rangeChange('width-filter-input-0', 'width-filter-input-1', widthRangeSlider);
        function rangeChange (inp1, inp2, range) {
            const priceFilterInput0 = document.getElementById(inp1),
        priceFilterInput1 = document.getElementById(inp2),
        priceFilterInputs = [priceFilterInput0, priceFilterInput1];

        range.noUiSlider.on('update', function(values, handle){
            priceFilterInputs[handle].value = Math.round(values[handle]);
        });
        const setPriceRangeSlider = (i, value) => {
            let arr = [null, null];
            arr[i] = value;
            priceRangeSlider.noUiSlider.set(arr);
        };
        
        priceFilterInputs.forEach((el, index) => {
            el.addEventListener('change', (e) => {
                setPriceRangeSlider(index, e.currentTarget.value);
            });
        });
        }
    } catch (e) {}
        const selectHeader = document.querySelectorAll('.select__header'),
        selectItem = document.querySelectorAll('.select__item');
        document.addEventListener('click', (e) => {
                    if (e.target.classList.contains('select__header')) {
                        e.target.closest('.select').classList.remove('is-active');
                        e.target.parentElement.classList.remove('check');
                    }  else {
                         document.querySelectorAll('.select').forEach((i) => {
                            i.classList.add('is-active');
                        });
                    }
        });

        selectItem.forEach((item) => {
            item.addEventListener('click', selectChoose)
        });

        function selectChoose() {
            const text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.add('is-active');
        select.classList.remove('rotate');
        select.classList.add('check');
        }
        try{
        const mobBtn = document.querySelector('.mob-filter__btn'),
        closeBtn = document.querySelector('.hide-content__close'),
        hadeContent = document.querySelector('[data-content]');

        mobBtn.addEventListener('click', () => {
            hadeContent.classList.add('block');
        })
        closeBtn.addEventListener('click', () => {
            hadeContent.classList.remove('block');
        })
    } catch (e) {}

try{
    let query = window.matchMedia("(min-width: 970px)");

    if(query.matches){
        const tabs = document.querySelectorAll('.tabs-content__tab'),
        tab = document.querySelector('.tabs-content__tab'),
        tabsContent = document.querySelectorAll('.tabs-content__item');
        
    
        tabs.forEach((tab) => 
            tab.addEventListener('click', function(e){
                e.preventDefault();
                const id = e.target.getAttribute('href').replace('#', '');
                
                tabs.forEach((child) => child.classList.remove('tabs-content__tab-active'));
                tabsContent.forEach((child) => child.classList.add('hide'));
                
                tab.classList.add('tabs-content__tab-active');
                document.getElementById(id).classList.remove('hide');
                
            })
        );
        tab.click();    
    } else {
        
        const slides = document.querySelectorAll('.tabs-content__item'),
        slidesHead = document.querySelectorAll('.tabs-content__tab'),
        prev = document.querySelector('.tabs-content__header-btn-prev'),
        next = document.querySelector('.tabs-content__header-btn-next');

        let slideIndex = 1;

        showSlides(slideIndex);

        function showSlides(n) {
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }
            slidesHead.forEach((item) => item.style.display = 'none');
            slidesHead[slideIndex - 1].style.display = 'flex'; 
            slidesHead[slideIndex - 1].classList.add('tabs-content__tab-active');

            slides.forEach((item) => item.style.display = 'none');

            slides[slideIndex - 1].style.display = 'flex'; 
            
        }

        function plusSlides (n) {
            showSlides(slideIndex += n);
        }

        prev.addEventListener('click', function(){
            plusSlides(-1);
        });

        next.addEventListener('click', function(){
            plusSlides(1);
        });
    }
} catch (e) {}
try{
    const q = window.matchMedia("(max-width: 460px)"),
    artNext = document.querySelector('.article-page__next'),
    artPrev = document.querySelector('.article-page__prew');

    if(q.matches){
        artNext.textContent = 'Следующая';
        artPrev.textContent = 'Предыдущая';
    }
} catch (e) {}
  });