<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\MailRequest;
use App\Jobs\SendMailJob;

class MailController extends Controller
{

    public function sendMail(MailRequest $request) {
        try {

            $response = SendMailJob::dispatch($request->all())->delay(now());
            
            return response()->noContent(201);
            
        }catch(\Exception $Exception) {
            $message = $Exception->getMessage();
            $statusCode = 500;

            return response()->json(["message"=>$message],$statusCode);
        }
    }
}
