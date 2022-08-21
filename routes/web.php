<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/get/student', [StudentController::class, 'getStudent'])->name('get-student');
Route::get('/colleges', [StudentController::class, 'colleges']);
Route::get('/programs', [StudentController::class, 'programs']);
Route::get('/college-list', [StudentController::class, 'collegeList']);
Route::get('/program-list', [StudentController::class, 'programList']);
Route::get('/course-list', [StudentController::class, 'courseList']);
Route::get('/load-data/{id}', [StudentController::class, 'loadData']);
Route::post('/individuals-student-details', [StudentController::class, 'individualsStudentDetails']);
Route::post('/update-student', [StudentController::class, 'updateStudent']);
Route::delete('/delete/{id}', [StudentController::class, 'delete']);
Route::post('/save-student', [StudentController::class, 'storeStudent']);
Route::get('/sample/{code}', [StudentController::class, 'sample']);
