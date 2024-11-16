<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AdminMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        // Kullanıcının kimlik doğrulamasını kontrol et
        if (!auth('sanctum')->check()) {
            return response()->json(['message' => 'Unauthorized access.'], 403);
        }

        // Kullanıcının rolünü kontrol et
        if (auth('sanctum')->user()->role !== 'admin') {
            return response()->json(['message' => 'Forbidden access. You do not have the required permissions.'], 403);
        }

        return $next($request);
    }
}