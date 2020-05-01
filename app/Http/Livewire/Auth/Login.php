<?php

namespace App\Http\Livewire\Auth;

use Livewire\Component;

class Login extends Component
{
  public $email;
  public $password;

  public function login()
  {
    $this->validate([
      'email' => 'required|email',
      'password' => 'required|min:6',
    ]);
  }

  public function render()
  {
    return view('livewire.auth.login');
  }
}
