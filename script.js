document.querySelectorAll('.tabBtn').forEach(btn => {
            btn.addEventListener('click', () => {

                document.querySelectorAll('.tabBtn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.card section').forEach(sec => sec.classList.remove('active'));

                btn.classList.add('active');
                document.querySelector('.' + btn.dataset.target).classList.add('active');


                const btnImg = btn.querySelector('.menuimg');

                btnImg.classList.add('menuBtnAni');
            });
        });