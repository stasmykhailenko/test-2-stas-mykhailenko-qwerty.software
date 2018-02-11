window.onload = function() {

	// СКРЫТИЕ И ПОЯВЛЕНИЕ САЙДБАРА
	var sidebarBtn = document.getElementById("sidebar-btn");
	var sidebar = document.getElementById("sidebar");
	var mainContent = document.getElementById("main-content");

	sidebarBtn.addEventListener('click', sidebarShowHide);
	function sidebarShowHide() {
		sidebar.classList.toggle("hide");
		mainContent.classList.toggle("all-width");
	};

	// ИЗМЕНЕНИЕ РАЗМЕРА ШРИФТА
	var inputFontSize = document.querySelector("input[name='font-size']");
	var allP = document.querySelectorAll("main p");

	inputFontSize.addEventListener('change', changeFontSize);
	
	function changeFontSize() {
		if (inputFontSize.value === "") {
			var numberFontSize = allP[0].style.fontSize.replace(/\D/g,'');
			inputFontSize.value = numberFontSize;
		} else if (inputFontSize.value < 8 || inputFontSize.value > 24 || !Number.isInteger(+inputFontSize.value)) {
			alert ('Размер шрифта должен быть целым значением от 8 до 24 пикселей');
			var numberFontSize = allP[0].style.fontSize.replace(/\D/g,'');
			inputFontSize.value = numberFontSize;
		} else {
			for (var i = 0; i < allP.length; i++) {
				allP[i].style.fontSize = inputFontSize.value + 'px';
			};
		};
	};

	// ИЗМЕНЕНИЕ ЦВЕТА ФОНА
	var inputBackgroundСolor = document.querySelector("input[name='background-color']");
	
	inputBackgroundСolor.addEventListener('change', changeBackgroundСolor);

	function changeBackgroundСolor() {
		document.body.style.backgroundColor = inputBackgroundСolor.value;
	};

	// ИЗМЕНЕНИЕ ШРИФТА
	var inputFontFamily = document.querySelectorAll("input[name='font-family']");

	for (var j = 0; j < inputFontFamily.length; j++){
		inputFontFamily[j].addEventListener('change', changeFontFamily);
	};

	function changeFontFamily() {
		for (var i = 0; i < allP.length; i++){
			allP[i].style.fontFamily = this.value;
		};
	};

	// УДАЛЕНИЕ ПОСЛЕДНЕГО АБЗАЦА
	var btnDeletP = document.querySelector(".delet-p");

	btnDeletP.addEventListener('click', deletP);
	
	function deletP() {
		if (allP.length == 1) {
			alert ('Больше не осталось абзацев!');
		} else {
			allP = document.querySelectorAll("main p");
			mainContent.removeChild(allP[allP.length-1]);
		};
	};

	// СКРЫТИЕ И ПОЯВЛЕНИЕ ФОРМЫ АВТОРИЗАЦИИ И РЕГИСТРАЦИИ
	var buttonLogin = document.querySelector(".button-login");
	var buttonReg = document.querySelector(".button-reg");
	var buttonLoginFooter = document.querySelector(".button-login-footer");
	var buttonRegFooter = document.querySelector(".button-reg-footer");
	var formLogin = document.querySelector(".form-login");
	var formReg = document.querySelector(".form-reg");

	function visibleFormLogin() {
		formLogin.classList.add("form-login-visible");
		formReg.classList.remove("form-reg-visible");
	};
	buttonLogin.addEventListener('click', visibleFormLogin);

	function visibleFormReg() {
		formLogin.classList.remove("form-login-visible");
		formReg.classList.add("form-reg-visible");
	};
	buttonReg.addEventListener('click', visibleFormReg);

	// скрытие форм при клике вне их области
	function hideForms(e) {
		if(!e.target.matches('.form-login, .form-login *') && !e.target.matches('.button-login') && !e.target.matches('.form-reg, .form-reg *') && !e.target.matches('.button-reg')) {
			formLogin.classList.remove("form-login-visible");
			formReg.classList.remove("form-reg-visible");
		}
	};
	window.addEventListener('click', hideForms);

	// прокрутка до header и появление формы регистрации и авторизации при нажатии кнопок в footer
	/*buttonLoginFooter.addEventListener('click', scrollEndLogin);
	function scrollEndLogin(){
		window.addEventListener('scroll', removeScrollEndLogin);
	};
	function removeScrollEndLogin(){
		visibleFormLogin();
		window.removeEventListener('scroll', removeScrollEndLogin);
	};

	buttonRegFooter.addEventListener('click', scrollEndFooter);
	function scrollEndFooter(){
		window.addEventListener('scroll', removeScrollEndFooter);
	};
	function removeScrollEndFooter(){
		visibleFormReg();
		window.removeEventListener('scroll', removeScrollEndFooter);
	};*/


	buttonLoginFooter.addEventListener('click', removeScrollEnd.bind(removeScrollEnd, "login"));
	buttonRegFooter.addEventListener('click', removeScrollEnd.bind(removeScrollEnd, "reg"));

	function removeScrollEnd(data){		
		setTimeout(function() {
			if (data == "login") {
				visibleFormLogin();
			} else if (data == "reg") {
				visibleFormReg();
			};
		}, 1);
	}
	
}	
