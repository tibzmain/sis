<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Student;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('students')->delete();
        \DB::statement('SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";');
        Student::factory(10)->create();
    }
}
