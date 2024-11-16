<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful;
use App\Http\Middleware\AdminMiddleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        return [
            // API middleware grubuna Sanctum middleware'ini ekleyin
            EnsureFrontendRequestsAreStateful::class,
            // Admin middleware'i ekleyin
            AdminMiddleware::class, // Eğer admin middleware'ini tüm API isteklerine eklemek istiyorsanız buraya ekleyin
            // Diğer middleware'leri buraya ekleyebilirsiniz
        ];
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();