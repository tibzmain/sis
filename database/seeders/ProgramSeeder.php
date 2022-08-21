<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ProgramSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        \DB::table('programs')->delete();
        \DB::statement('SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";');
        \DB::table('programs')->insert(array (
        	0 => 
            array (
                
                'course_code' => 'IT_206',
                'course_name' => 'IT Fundamentals',
                'program' => 'BSIT',
               
            ),
            1 => 
            array (
                
                'course_code' => 'IT_146',
                'course_name' => 'Database Management System',
                'program' => 'BSIT',
            ),
            2 => 
            array (
              
                'course_code' => 'IT_484',
                'course_name' => 'Web Development',
                'program' => 'BSIT',
            ),
            3 => 
            array (
                
                'course_code' => 'IT_187',
                'course_name' => 'Data Structures',
                'program' => 'BSIT',
            ),
            4 => 
            array (
                
                'course_code' => 'IT_385',
                'course_name' => 'System Analysis and Design',
                'program' => 'BSIT',
            ),
            5 => 
            array (
                
                'course_code' => 'BSED_160',
                'course_name' => 'Principle of Teaching',
                'program' => 'BSED',
            ),
            6 => 
            array (
                
                'course_code' => 'BSED_490',
                'course_name' => 'facilitating Learning',
                'program' => 'BSED',
            ),
            7 => 
            array (
                
                'course_code' => 'BSED_457',
                'course_name' => 'Assessment of Student Learning',
                'program' => 'BSED',
            ),
            8 => 
            array (
                
                'course_code' => 'BSED_130',
                'course_name' => 'Social Dimensions of Education',
                'program' => 'BSED',
            ),
            9 => 
            array (
                
                'course_code' => 'BSTM_453',
                'course_name' => 'Total Quality Management',
                'program' => 'BSTM',
            ), 
            10 => 
            array (
                
                'course_code' => 'BSTM_163',
                'course_name' => 'Food and Beverage Service Procedures',
                'program' => 'BSTM',
            ), 
            11 => 
            array (
                
                'course_code' => 'BSTM_294',
                'course_name' => 'Tourism Planning and Development',
                'program' => 'BSTM',
            ),
        ));
    }
}
