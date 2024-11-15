<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    // Kullanıcı modelinde doldurulabilir alanlar
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    // Gizli alanlar (örneğin, şifre ve hatırlama jetonu)
    protected $hidden = [
        'password',
        'remember_token',
    ];

    // Alanların otomatik olarak tür dönüşümünü sağlamak için
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // Kullanıcı oluşturulurken şifreyi hash'lemek için
    public static function boot()
    {
        parent::boot();

        static::creating(function ($user) {
            $user->password = bcrypt($user->password);
        });
    }
}