<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CollegeSyllabusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('college_syllabi')->delete();
        \DB::statement('SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";');
        \DB::table('college_syllabi')->insert(array (
        	0 => 
            array (
                
           
                'college_code' => 'CAS',
                'college_name' => 'College of Arts and Sciences',
            ),
            1 => 
            array (
                
                
                'college_code' => 'COFED',
                'college_name' => 'College of Education',
               
            ),
            2 => 
            array (
                
                'college_code' => 'CME',
                'college_name' => 'College of Management and Entrepreneurship',

            ),
        ));
    }
}
