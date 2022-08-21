<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\College;
use App\Models\Student;
use App\Models\Program;
use App\Models\CollegeSyllabus;
use Log;
use Exception;

class StudentController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    public function getStudent(){
        
        $student = Student::all();

        return response()->json(['student' => $student, 'status_code'=> 200]);
    }
    
    public function colleges(){
        
        $student = College::all();

        return response()->json(['student' => $student, 'status_code'=> 200]);
    }
    
    public function programs(){
        
        $student = Program::all();

        return response()->json(['student' => $student, 'status_code'=> 200]);
    }
    
    public function individualsStudentDetails(Request $request){
        
        $student = Student::findOrFail($request->get('studentId'));

        return response()->json(['student' => $student, 'status_code'=> 200]);
    }
    
    public function collegeList(){
        
   
        $datas = CollegeSyllabus::get()->all();
        
        $list = [];
   
            
            
            foreach($datas as $data){
                // dd($data);
             
                $data = [
                    "code" => $data->college_code,
                    "name" => $data->college_name,         
                ];
        
                $list[] = $data;
              
            }
           
    
        return response()->json(['student' => $list, 'status_code'=> 200]);
    }
    
    public function programList(){
        
        $student = College::get()->pluck('program');
        $datas = College::get()->all();
        $list = [];
        foreach ($student as $students) {
            // dd($students);
            $name = "";
            foreach($datas as $data){
                // dd($data);
                if($data->program == $students){
                    $name = $data->program_name;
                }
            }
            $data = [
                "code" => $students,
                "name" => $name           
            ];
            
            $list[] = $data;
        }
        // dd($list);

        return response()->json(['student' => $list, 'status_code'=> 200]);
    }
    
    public function courseList(){
        
        
        $datas = Program::get()->all();
        $list = [];
       
        $name = "";
        foreach($datas as $data){
                // dd($data);
            $data = [
                "code" => $data->course_code,
                "name" => $data->course_name           
            ];
                
            $list[] = $data;
        }
        
       
        // dd($list);

        return response()->json(['student' => $list, 'status_code'=> 200]);
    }
    
    public function loadData(Student $id){

        return response()->json(['student' => $id, 'status_code'=> 200]);
    }
    
    public function updateStudent(Request $request){
        
        $id    = $request->get('id');
        $name  = $request->get('studentName');
        $number = $request->get('studentNumber');
        $course = strtoupper($request->get('studentCourse'));
        $check = Program::where('course_code', $course)->get();
        if($name != '' && $name != '' && $course!= '' && count($check) > 0 ){
            $update = Student::where('id', $id )->update([
            
                'student_number' => $number,
                'name' => $name,
                'course_code' => $course,
            ]);
    
            
            return response()->json(['message' => 'Student Updated Successfully!', 'status_code'=> 200]);
        }else{
            return response()->json(['message' => 'Sorry! Something went wrong!', 'status_code'=> 404]);
        }
        
        
    } 
    
    public function delete(Student $id){
        
        $id->delete();
        return response()->json(['student' => $id, 'status_code'=> 200]);
    }


    public function storeStudent(Request $request){
        
        $id = $request->get('student_number');
        $name = $request->get('name');
        $course = strtoupper($request->get('course'));
        $checkId = is_numeric($id);
        $check = Program::where('course_code', $course)->get();

        if(count($check) > 0 && $checkId ){
            $save = Student::create([

                'student_number' => $id,
                'name' => $name,
                'course_code' => $course,
            ]);

            if($save){
                return response()->json(['message' => 'Student Saved Successfully!', 'status_code'=> 200]);
            }else{
                return response()->json(['message' => 'Sorry! Something went wrong!', 'status_code'=> 404]);
            }
           
            
        }else{
            return response()->json(['message' => 'Sorry! Something went wrong!', 'status_code'=> 404]);
        }
        
    }

    public function sample($code){

        $id = (int) $code;
   
        $checkId = is_numeric($id);

        console.log($checkId);
        $check = Program::where('course_code', $code)->get();

        dd(count($check) > 0);

    }

}
