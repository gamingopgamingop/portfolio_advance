<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;

class Newsletter extends Model
{
    // Define the table name if it doesn't follow Laravel's naming convention
    protected $table = 'newsletters';  // Assuming your table is named 'newsletters'

    // Specify the attributes that are mass assignable
    protected $fillable = ['email'];

    // Casts for date/time fields
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // Disable automatic timestamps if your table doesn't have 'created_at' and 'updated_at'
    // public $timestamps = false;

    // Define validation rules for the model
    public static $rules = [
        'email' => 'required|email|unique:newsletters,email'
    ];

    // Method to validate email
    public static function validateEmail($email)
    {
        $validator = Validator::make(['email' => $email], self::$rules);

        if ($validator->fails()) {
            return $validator->errors()->first();
        }

        return null; // If validation passes
    }

    // Create or update a newsletter subscription
    public static function createOrUpdate($email)
    {
        // Validate the email
        $validationError = self::validateEmail($email);
        if ($validationError) {
            return $validationError;
        }

        // Check if the email already exists, then update or create a new record
        $newsletter = self::firstOrNew(['email' => $email]);
        $newsletter->email = $email;
        $newsletter->save();

        return 'Email successfully added to the newsletter list.';
    }

    // Get all subscribers
    public static function getAllSubscribers()
    {
        return self::all();
    }

    // Delete a subscriber by email
    public static function deleteByEmail($email)
    {
        $subscriber = self::where('email', $email)->first();

        if ($subscriber) {
            $subscriber->delete();
            return 'Subscriber removed successfully.';
        }

        return 'Subscriber not found.';
    }
}
