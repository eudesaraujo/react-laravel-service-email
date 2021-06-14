<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendMail extends Mailable
{
    use Queueable, SerializesModels;
    private $mail;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Array $mail)
    {
        $this->mail = $mail;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $this->subject($this->mail["subject"]);
        $this->to($this->mail["email"]);
        
        return $this->markdown('mail.sendMail',["text"=>$this->mail["message"]]);
    }
}
