<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\VideoController;
use App\Http\Controllers\PostController;

// Kullanıcı bilgilerini almak için
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Kayıt ve giriş işlemleri
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Video işlemleri
Route::post('/videos', [VideoController::class, 'store']);

// Post işlemleri
Route::get('/posts', [PostController::class, 'index']); // Tüm gönderileri listele
Route::post('/posts', [PostController::class, 'store']); // Yeni gönderi ekle