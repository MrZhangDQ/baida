var app = angular.module('young',['ui.router','ngCookies']);
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.when('','/index/home');
	$stateProvider
		.state('index',{
			url:'/index',
			templateUrl:'html/index.html',
			controller:'indexCtrl'
		})
		.state('home',{
			url:'/home',
			templateUrl:'html/home.html',
			controller:'homeCtrl'
		})
}]);

app.controller('indexCtrl',['$scope','cookieStore','$rootScope',function($scope,$cookieStore,rootScope){
	$('body').css('backgroundColor','#f2f2f2');
	//返回top
	$scope.toTop = function(){
		$('body').scrollTop(0);
	}
	//创建一个商品的全局对象
	$rootScope.goodnum = 0;
	$rootScope.goodlistObj = {
		goodlist:[]
	}
	//进入时判断cookie有没hoster
	var hoster = cookieStore.get('hoster');
	$scope.car = function(){
		if(hoster != ""){
			//window.location.href = "";
		}else{
			window.location.href = "#/login"
		}
	}
}]);
app.controller('homeCtrl',['$scope','$http',function($scope,$http){
	$('body').css('backgroundColor','#f2f2f2');
	$('#toTop').css('display','block');
	$('.icon-1').addClass('active').siblings('li').removeClass('active');
	//swiper轮播
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		slidesPerView: 1,
		speed: 300,
		paginationClickable: true,
		spaceBetween: 0,
		loop: true,
		autoplay: 3000,
		autoplayDisableOnInteraction: false
	});
	$scope.ajax = function(){
		$http.get('').success(function(data){
			$scope.contents = data.datalist
		})
	};
}])
