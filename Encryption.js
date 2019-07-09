
    
    var universe = ['a','b','c','d','e','f','g','h','i','j','k','l',
                    'm','n','o','p','q','r','s','t','u','v','w',
                    'x','y','z','0','1','2','3','4','5','6','7',
                    '8','9','A','B','C','D','E','F','G','H','I',
                    'J','K','L','M','N','O','P','Q','R','S','T',
                    'U','V','W','X','Y','Z', ' ', '!', '?', ';',
                    ':', '-', '~'];
    
    var num_list = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    
    function digit_translation(character)
    {
        for(var i = 0; i < 10; i++)
        {
            if(character == num_list[i]) { return i; }
        }
    }
    
    function Alphabet_Encode(character)
    {
        for(var i = 0; i < universe.length; i++)
        {
            if(universe[i] == character) { return i + 1; }
        }
    }
    
    function Alphabet_Decode(this_integer)
    {
    	return universe[this_integer - 1];
    }
    
    function setCharAt(str,index,chr)
    {
        if(index > str.length-1) return str;
        return str.substr(0,index) + chr + str.substr(index+1);
    }    

    function Caesar()
    {
        var i = 0;
        var string_message = prompt("Please enter a message and press the 'Encrypt' button", "This Message");  
        var shift = prompt("Please enter a constant", "0");
        //var shift_constant = 2;
        
        var shift_constant = digit_translation(shift);
        
        document.getElementById("output").innerHTML = "Plaintext: " + string_message;
        
        for(i = 0; i < string_message.length; i++)
        {
            string_message = setCharAt(string_message, i, universe[(Alphabet_Encode(string_message[i]) + shift_constant) % universe.length]);   
        }
        
        document.getElementById("output2").innerHTML = "Ciphertext: " + string_message;
    }
    
    function Vigenere()
    {
        var temp_a; //abc
						//123
						//123
						//246
						//bdf
        var temp_b;

        var string_message = prompt("Please enter a message and press 'Enter'", "This Message");  
        var key = prompt("Please enter a key and press 'Enter'", "0");
        var key_size = key.length;
        
        document.getElementById("output").innerHTML = "Plaintext: " + string_message;
        
        for(var i = 0; i < string_message.length; i++)
        {
            //convert the ith character of the message to a number
            temp_a = string_message[i];
            temp_b = Alphabet_Encode(key[i % key_size]);
            temp_c = Alphabet_Encode(temp_a);
            temp_c = (temp_c + temp_b) % universe.length;

            //convert it back into a char and place at
            //the ith position of the message.
            
            temp_a = Alphabet_Decode(temp_c);
            string_message = setCharAt(string_message, i, temp_a);
        }
        
        document.getElementById("output2").innerHTML = "Ciphertext: " + string_message;
    }
    
    // 246 8008 (Bonnie)
    