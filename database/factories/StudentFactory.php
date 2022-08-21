<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class studentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'student_number' => $this->faker->randomNumber(5, true),
            'course_code' => $this->faker->randomElement(['IT_206', 'IT_146', 'IT_484', 'IT_187', 'IT_385', 'BSED_160', 'BSED_490', 'BSED_457', 'BSED_130', 'BSTM_453', 'BSTM_163', 'BSTM_294']),
           
        ];
    }
}
