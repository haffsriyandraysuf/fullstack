<?php

Route::group([

  'middleware' => 'api',
  'prefix' => 'auth'

], function ($router) {

  Route::post('login', 'AuthController@login');
  Route::post('logout', 'AuthController@logout');
  Route::post('register', 'AuthController@register');
  Route::post('me', 'AuthController@me');
});
