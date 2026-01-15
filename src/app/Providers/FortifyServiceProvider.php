<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use Laravel\Fortify\Fortify;
use App\Actions\Fortify\CreateNewUser;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Laravel\Fortify\Contracts\LoginResponse;
use Laravel\Fortify\Contracts\RegisterResponse;

class FortifyServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // ログイン後のリダイレクト先をカスタマイズ
        $this->app->singleton(LoginResponse::class, function () {
            return new class implements LoginResponse {
                /**
                 * Create an HTTP response that represents the object.
                 */
                public function toResponse($request)
                {
                    // ログイン完了後は常にトップページへ
                    return redirect()->intended('/');
                }
            };
        });

        // 新規登録完了後のリダイレクト先をカスタマイズ
        $this->app->singleton(RegisterResponse::class, function () {
            return new class implements RegisterResponse {
                /**
                 * Create an HTTP response that represents the object.
                 */
                public function toResponse($request)
                {
                    // 新規会員登録が完了した直後のみ /department/select へ
                    return redirect('/department/select');
                }
            };
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Fortify::twoFactorChallengeView(fn () => Inertia::render('auth/two-factor-challenge'));
        Fortify::confirmPasswordView(fn () => Inertia::render('auth/confirm-password'));

        RateLimiter::for('login', function (Request $request) {
            return Limit::perMinute(5)->by($request->input('email') ?: $request->ip());
        });

        RateLimiter::for('two-factor', function (Request $request) {
            return Limit::perMinute(5)->by($request->session()->get('login.id'));
        });

        Fortify::loginView(function () {
            return view('auth.login');
        });

        app()->bind(CreatesNewUsers::class, CreateNewUser::class);

        Fortify::registerView(function () {
            return view('auth.register');
        });
    }
}
