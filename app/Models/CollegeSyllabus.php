<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CollegeSyllabus extends Model
{
    use HasFactory;

    protected $table = 'college_syllabi';

    protected $fillable = [
        'college_code',
        'college_name',

    ];
}
