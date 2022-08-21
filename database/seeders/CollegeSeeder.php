<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CollegeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('colleges')->delete();
        \DB::statement('SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";');
        \DB::table('colleges')->insert(array (
        	0 => 
            array (
                
                'program' => 'BSIT',
                'program_name' => 'Bachelor of Science in Information Technology',
                'college_code' => 'CAS',
                
            ),
            1 => 
            array (
                
                'program' => 'BSSW',
                'college_code' => 'CAS',
                
                'program_name' => 'Bachelor of Science in Social Work'
            ),
            2 => 
            array (
              
                'program' => 'ABCOM',
                'college_code' => 'CAS',
                
                'program_name' => 'Bachelor of Arts in Communication'
            ),
            3 => 
            array (
                
                'program' => 'AB POSCI',
                'college_code' => 'CAS',
       
                'program_name' => 'Bachelor of Arts in Political Science'
            ),
            4 => 
            array (
                
                'program' => 'BEED',
                'college_code' => 'COFED',
                
                'program_name' => 'Bachelor of Science in Elementary Education'
            ),
            5 => 
            array (
                
                'program' => 'BSED',
                'college_code' => 'COFED',
                
                'program_name' => 'Bachelor of Science in Secondary Education'
            ),
            6 => 
            array (
                
                'program' => 'BSPED',
                'college_code' => 'COFED',
        
                'program_name' => 'Bachelor of Science in Special Education'
            ),
            7 => 
            array (
                
                'program' => 'BSTM',
                'college_code' => 'CME',
               
                'program_name' => 'Bachelor of Science in Tourism Management'
            ),
            8 => 
            array (
                
                'program' => 'BSHM',
                'college_code' => 'CME',
                
                'program_name' => 'Bachelor of Science in Hospitality Management'
            ),
            9 => 
            array (
                
                'program' => 'BSEntrep',
                'college_code' => 'COFED',
             
                'program_name' => 'Bachelor of Science in Entrepreneurship'
            ),
        ));
    }
}
