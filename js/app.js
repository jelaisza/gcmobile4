angular.module('starter', ['ionic', 'starter.controllers'])
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
	$ionicConfigProvider.tabs.position('bottom');
  $stateProvider
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })

	.state('landing', {
 url: '/landing',
 templateUrl: 'templates/landing.html'

 }
)


  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
		controller:'login'
}
    }
  })

   .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html'
  })



   .state('app.account', {
    url: '/account',
    views: {
      'menuContent': {
        templateUrl: 'templates/account.html',
		controller: 'account'
      }
    }
  })


	.state('app.home1', {
	 url: '/home1',
	 views: {
		 'menuContent': {
			 templateUrl: 'templates/home1.html',
		 }
	 }
 })


	.state('app.announcement', {
	 url: '/announcement',
	 views: {
		 'menuContent': {
			 templateUrl: 'templates/announcement.html',
		 }
	 }
 })

 .state('app.availmedicine', {
	url: '/availmedicine',
	views: {
		'menuContent': {
			templateUrl: 'templates/availmedicine.html',
		}
	}
})


.state('app.record', {
url: '/record',
views: {
'menuContent': {
  templateUrl: 'templates/record.html',

}
}
})

.state('app.medical', {
url: '/medical',
views: {
'menuContent': {
  templateUrl: 'templates/medical.html',

}
}
})

.state('app.dental', {
url: '/dental',
views: {
'menuContent': {
  templateUrl: 'templates/dental.html',

}
}
})

.state('app.ehealth', {
url: '/ehealth',
views: {
'menuContent': {
  templateUrl: 'templates/ehealth.html',

}
}
});

  ;

  $urlRouterProvider.otherwise('/landing');
});
