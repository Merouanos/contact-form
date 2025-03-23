<?php
    Class contact{
        public string $name;
        public string $lname;
        public  string $email;
        public  string $type;
        public  string $msg;


        public function __construct($name,$lname,$email,$type,$msg) {
            $this->name=$name;
            $this->lname=$lname;
            $this->email=$email;
            $this->type=substr($type,0,1);
            $this->msg=$msg;
        }
        public function echo(){
            return "\"".$this->name."\"".","."\"". $this->lname."\"".","."\"".$this->email."\"".","."\"".$this->type."\"".","."\"".$this->msg."\"";
          
        }


    }

    if($_SERVER["REQUEST_METHOD"]=="POST"){

        $client =new contact($_POST["Name"],$_POST["lName"],$_POST["Email"],$_POST["Type"],$_POST["Message"]);
        $sql = mysqli_connect("localhost","root","Mergito100","School");
        
        if($sql)
        {   
            $res=$sql->query("SELECT id FROM contact WHERE name= '{$client->name}' AND lastname='{$client->lname}' ;");
            if($res->num_rows==0)
            {
                //echo $client->echo();
                $sql->execute_query("INSERT INTO contact(name,lastname,email,type,msg) VALUES({$client->echo()});");
               
            }
            else
                echo "account exist";
        }



    }
    