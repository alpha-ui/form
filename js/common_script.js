//*********************************************************************
// File Name               : common_script.js
// Scope Of Program        : validation script for  blank, numeric,
//			     alpha-numeric,email id form field.
// Created On              : 10/03/2004
// Modified On             : 11/03/2004
// Reason of Modification  : Add date validation function
// Special Remark          :
//*********************************************************************

/* Function to display java Popup for calendar */

function javaCal(fld)
{
	/* Name		: javaCal						 */
	/* Purpose	: Creates a popup Window for selecting the date. The
			  selected date is set in the textfield.		 */
	/* Inputs	: fld = textfield for setting the date			 */
	/* Outputs	: Calendar Popup					 */
	/* Calls	: calnav.htm						 */
	/* Called By	: 							 */


	tmp_dt_today= new Date();
	tmp_str_dt  = tmp_dt_today.getDate();
        tmp_str_mon = tmp_dt_today.getMonth();
        tmp_str_yr  = tmp_dt_today.getFullYear();

	var tmp_dt_timeStamp  = new Date(tmp_str_yr,tmp_str_mon,tmp_str_dt,0,0,0);
	var tmp_int_todaySecs = Date.parse(tmp_dt_timeStamp);

	/* allowPast = 1 allows selection of past dates
	   allowPast = 0 does not allow selection of past dates
	*/

	doc = "./include/inc_common/calnav.htm?frmField="+fld+"&tmp_int_todaySecs="+tmp_int_todaySecs+"&allowPast=1";

	//alert(doc);
	window.open(doc,"Calendar","toolbar=0, location=0,directories=0,resizable=no,status=0,menubar=0,scrollbars=no,width=275,height=275,screenX=0,screenY=0");

}

//************** function restricts user from entering blank string and
// from entering only white speces.*****************

function isBlank(tmp_str)
{
// Name      : isBlank.

// Purpose   : keeping validation for blank field.

// Inputs    : tmp_str -> string for validation

// Outputs   : return the value of veriable newString.
//             if newString = "" returns null

var newString  = ''; //trim value of given string
var substring  = ''; // temporary string for checking white spaces in string.
beginningFound = false; // position of white space

// copy characters over to a new string
// retain whitespace characters if they are between other characters

for (var i = 0; i < tmp_str.length; i++)
 {
	// copy non-whitespace characters
	// hold whitespace characters in a temporary string if they follow a non-whitespace character

	if (tmp_str.charAt(i) != ' ' && tmp_str.charCodeAt(i) != 9)
	{
		// if the temporary string contains some whitespace characters, copy them first
		if (substring != '')
		{
			newString += substring;
			substring = '';
		}
		newString += tmp_str.charAt(i);
		 if (beginningFound == false)
		 {
		   beginningFound = true;
		 }
	}

	else if (beginningFound == true)
	{
	   substring += tmp_str.charAt(i);
	}
  }

  return newString;

}

//************** function for allowing only Alpha-Numeric String *****************

function isAlphaNumeric(tmp_str)
{
  // Name      : isAlphanumeric.

  // Purpose   : allow user to enter only Alpha(A-Z)-Numeric(0-9) values.
  // Inputs    : tmp_str -> string for validations.
  // Outputs   : return 1 -> if form field is alphanumeric
  //		 return -1 -> if form field is not alphanumeric

//ignore validation if tmp_str is blank.
if(tmp_str != "")
 {
  // searching whole string word by word
    if (tmp_str.search)
      {
        //checking the words in string.
        //  if string contains the non Alpha-Nemeric value, return -1.
        //  else return 1.

	 if ((tmp_str.search(/[^\w\s]/) != -1) || (tmp_str.search(/\W/) != -1))
	  {
	 	return -1;
	  }
      }
 }
 return 1;
}


//************** function for allowing only Numeric String *****************

//************** function for allowing only Alpha String *****************

function isAlpha(tmp_str)
{
  // Name      : isAlpha.

  // Purpose   : allow user to enter only Alpha(A-Z) values.
  // Inputs    : tmp_str -> string for validations.
  // Outputs   : return 1 -> if form field is alphabetic
  //		 return -1 -> if form field is not alphabetic

//ignore validation if tmp_str is blank.
if(tmp_str != "")
 {
  // searching whole string word by word
    if (tmp_str.search)
    {
        //checking the words in string.
        //  if string contains the non alphabetic value, return -1.
        //  else return 1.

	  	if ((tmp_str.search((/[a-zA-Z]/)) != -1) && (tmp_str.search((/[0-9]/)) == -1)&& (tmp_str.search(/[^\w\s]/) == -1))
	  	{
	 		return 1;
	  	}
	  	else
	  	{
	  		return -1;
	  	}

    }
 }
 return 1;
}


//************** function for allowing only String *****************


function isNumeric(tmp_int)
{
  // Name      : isNumeric.

  // Purpose   :allow user to enter only Numeric(0-9) values.
  // Inputs    : tmp_int -> string for validations.
  // Outputs   : return 1 -> if form field is Numeric
  //		 return -1 -> if form field is not Numeric

//ignore validation if tmp_int is blank.

if(tmp_int != "")
 {
   // searching whole string word by word
    if (tmp_int.search)
     {
        //checking the words in string.
        //  if string contains the non Nemeric value, return -1.
        //  else return 1.

	if (tmp_int.search((/[^\d]/)) != -1)
	{
		return -1;
	}
     }
 }
 return 1;
}

//************** function for allowing only Numeric String *****************
function isEmailId(tmp_str)
{
  // Name      : isEmailId.
  // Purpose   : allow user to enter value in email id format(xxx@kk.com).
  // Inputs    : tmp_str -> string for validation.
  // Outputs   : return 1 -> if form field is as email id format.
  //		 return -1 -> if form field is not as email id format.


//ignore validation if tmp_str is blank.

if(tmp_str != "")
  {
     // searching whole string word by word

       if (tmp_str.search)
        {
          //checking the words in string.
          //  if given string is not in email id format(xxx@zzz.com), return -1.
          //  else return 1.

       	       fsign = tmp_str.indexOf("@");
       	       ssign = tmp_str.indexOf(".");

	       if(fsign <= 0 || ssign <= 0)
	       {
		     return -1;
	       }
        }
  }
 return 1;
}

/********* Function Validate date ***************/

function isDate(dateStr,formatStr)
{

  // Name      : isDate.

  // Purpose   : validate Date.

  // Inputs    : dateStr-> Date Value, formatStr -> format of date.

  // Outputs   : return null -> if user enter enter validate data
  //             else return error text

  // Calls     : buildDate(dateStr,formatStr)
  //             datestr = date value
  //             formatStr = date format


  //calls function for validating date

  var myObj = buildDate(dateStr,formatStr);

  //returns the correct date
  //else returns the appropriate error message

   if (typeof myObj == "object")
   {

   // We got a Date object, so good.

    myObj = "";
    return myObj;
   }
   else
   {

   // We got an error string.

    return myObj;
   }
}

function isFile(tmp_str,fileTyp)
{
  // Name      : isFile.
  // Purpose   : validation for File extention
  // Inputs    : tmp_str -> string for validations.
  //	         fileTyp -> file extention type.
  // Outputs   : return 1 -> if form field is valid
  //		 return -1 -> if form field is unvalid

//ignore validation if tmp_str is blank.
if(tmp_str != "")
 {
	var validExt = "no";
	fileStr   = tmp_str;
	intstrLen = fileStr.length;
	intLoc    = fileStr.lastIndexOf(".");
	extVal    = fileStr.substring(intLoc,intstrLen);
	extVal	  = extVal.toLowerCase();
        valExt    = fileTyp;
	var extArry   = valExt.split('#');
	var maxLng    = extArry.length;

        //alert(maxLng);

	for(i=0;i<maxLng;i++)
	{
	   //alert(extVal);
		if(extArry[i] == extVal)
		{

			validExt  = "yes";
		}
	}
	if(validExt == "no")
	{
	  return -1;
	}
 }
 return 1;
}

//************** Price validation *****************

function isPrice(numval)
{
 itPr = 1;

 //alert("sss");

  num = numval;

  PRLen = num.length;
  Len  = num.lastIndexOf(".");
  Len1  = num.lastIndexOf("-");
  extVal = num.substring(Len,PRLen);

  num = num.toString().replace(/\$|\,/g,'');

  if(isNaN(num))
  num = "0";
  sign = (num == (num = Math.abs(num)));
  num = Math.floor(num*100+0.50000000001);
  cents = num%100;
  num = Math.floor(num/100).toString();
  if(cents<10)
  cents = "0" + cents;
  for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
  num = num.substring(0,num.length-(4*i+3))+','+
  num.substring(num.length-(4*i+3));
  newprice = (num + '.' + cents);
  //alert (newprice);
  //alert(Len1);
  if(newprice == "0.00")
  {
  itPr = 0;
  }

 if((Len != -1)&&(extVal.length > 3))
 {
  itPr  = 0;
 }

 if(Len1 >= 0)
  {
    itPr = 0;
  }

  return itPr;
}

function getPathStr(tmp_str_path)
{
/*
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  Name  : getPathStr()
  Purpose : To get path of the image for validation Img's width
      & height
  Inputs  : tmp_str_path => path of the file selected for upload
  Outputs : formated path string
  Calls  : None
  Called By :

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/

    /* convert the path to form required for Image object */
    tmp_str_imgStr = new String(tmp_str_path);

    tmp_arr_imgStr =  tmp_str_imgStr.split("\\");

    tmp_str_imgStr = "";
    for(i=0;i< tmp_arr_imgStr.length; i++)
    {
     tmp_str_imgStr += tmp_arr_imgStr[i]+"/";
    }

    tmp_int_len = tmp_str_imgStr.length;
    tmp_str_imgStr = tmp_str_imgStr.substring(tmp_str_imgStr,tmp_int_len-1);

    tmp_str_imgStr = tmp_str_imgStr.replace(":","|");
    tmp_str_imgStr = "file:///"+tmp_str_imgStr;

    return tmp_str_imgStr;
}

function preImg(doc,tmp_str_fld)
{
/*
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  Name  : preImg()
  Purpose : To create Img obj & check file typ before submitting
          the form.
  Inputs  : form obj
  Outputs : Nothing
  Calls  : getPathStr()
  Called By :

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/
   eval("tmp_str_img = doc."+tmp_str_fld+".value");

   /* get formated path string required for Image object */
   tmp_str_imgStr = getPathStr(tmp_str_img);

   /* create an Image obj & assign the selected image as its source */
   img = new Image();
   img.src = tmp_str_imgStr;
}



function isImage(doc,frmVal,maxWidth,maxHeight)
{
/*
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  Name         : val_image
  Purpose      : Function to check the image height and weidth
  Inputs       : doc,maxWidth,maxHeight
  Outputs      : retuns error or successfull flag
  Calls        : getPathStr() for getting image path
  Called By    :

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/

tmpRetVal = 1;

/* get formated path string required for Image object */
   tmp_str_imgStr = getPathStr(frmVal);

   /* create an Image obj & assign the selected image as its source */
   img = new Image();
   img.src = tmp_str_imgStr;
   //alert("tmp_str_imgStr="+img.src );
   tmp_int_wd = img.width;
   tmp_int_ht = img.height;
   //alert("width="+img.width);
   //alert("img.height="+img.height);
   tmp_int_maxWd = maxWidth;
   tmp_int_maxHt = maxHeight;
  // alert("maxWidth="+maxWidth );
   //alert("maxHeight="+maxHeight);

   /* if Image width is more than tmp_int_maxWd  display error */
   //if((tmp_int_wd != tmp_int_maxWd) || (tmp_int_ht != tmp_int_maxHt))
   if((tmp_int_wd > tmp_int_maxWd) || (tmp_int_ht > tmp_int_maxHt))
   {
     tmpRetVal = -1;
   }

  return tmpRetVal;
}

//************** function for validation Phone numbers *****************
function isPhoneNo(tmp_str)
{
  // Name      : isPhoneNo
  // Purpose   : allow user to enter value in phone numbers with only "-" and "." .
  // Inputs    : tmp_str -> string for validation.
  // Outputs   : return 1 -> if form field is as phone no format.
  //		 return -1 -> if form field is not as phone no format.

 Chars = "0123456789+-.";
 flag=0;
	  
	  if(tmp_str.length < 10 || tmp_str.length > 10)	
	  {
		  flag = 1;
	  }
	  if(flag)
      {
	  return true;
      }
	  
      for (i = 0; i < tmp_str.length; i++)
      {
          // Check that current character is number.
          var c = tmp_str.charAt(i);

          if (Chars.indexOf(c) == -1)
          	flag = 1;
      }
	  
	  
      if(flag)
      {
	  return true;
      }
}

//************** function for validates the form feilds *****************

function validate_form(doc)
{
  //On Error Resume Next;

  // Name      : validate_form.

  // Purpose   : validate the form fields.

  // Inputs    : all form feilds values

  // Outputs   : return true -> if user enter enter validate data
  //             else return false
  //             alert box displays with error message.
  // Calls     : isBlank(tmp_str) -> checks the field is blank or containing
  //		                       only white speces.
  //             isAlphaNemeric(tmp_str) -> checks the feild is Alpha-Nemeric
  //		 isNumeric(tmp_int) -> checks the field is nemeric
  //		 isEmailId(tmp_str) -> checks the field is in email id
  //		                        format(xxx@yyy.com)



 //declearing veriables

 var str;                     // stores error messages.
 var blank_field;             // stores a string of form fields and error lable for
                              // blank validation.
 var numeric_field;           // stores a string of form fields and error lable for
                              // numeric[0-9] validation.
 var AlphaNumeric_field;      // stores a string of form fields and error lable for
                              // Alpha-Numeric[A-Z]and[0-9] validation.

 var Alpha_field;     		 // stores a string of form fields and error lable for
                              // Alpha-Numeric[A-Z]and[0-9] validation.
 var email_field;             // stores a string of form fields and error lable for
                              // email[xxx@zz.com] validation.
 var date_field               // stores a string of form date fields and error lable for
                              // date validation
 var file_field;              // stores a string of form file fields and error lable for
                              // date validation valid extentions
 var price_field;             // stores a string of form fields and error lable for
                              // price validation
 var image_field;             // stores a string of image's maximum width and height & name

 var phone_field;             // stores a value of phone no


 			      // of form field and error lable for image validation
 var str_blank_field;         // array in which value of blank_field stored by
                              // comma separating.
 var str_numeric_field;       // array in which value of numeric_field stored by
                              // comma separating.
 var str_alphanumeric_field;  // array in which value of AlphaNumeric_field stored by
                              // comma separating.
 var str_alpha_field; 		 // array in which value of AlphaNumeric_field stored by
                              // comma separating.

 var str_email_field;         // array in which value of email_field stored by
                              // comma separating.
 var str_date_field;          // array in which value of date_field stored by
                              // comma separating.
 var str_file_field;          // array in which value of file_field stored by
                              // comma separating.  allowd file extetions are
 			      // seperated by #.
 var str_price_field;         // array in which value of price_field stored by
                              // comma separating.
 var str_image_field;         // array in which value of image_field stored by
                              // comma separating.
 var arr_phone_field;         // stores a form field details of Phone fields bycomma seperated

 var tmp_valFile;             // veriable related with file and image size and width .

 tmp_valFile = "";




/* if form field is not aailable setts the null value **/
  if(typeof doc.js_Blank == "undefined")
  {
    blank_field = "";
  }
  else
  {
    blank_field = doc.js_Blank.value;
  }

  if(typeof doc.js_Numeric == "undefined")
  {
     numeric_field = "";
  }
  else
  {
      numeric_field = doc.js_Numeric.value;
  }

  if(typeof doc.js_AlphaNumeric == "undefined")
  {
      AlphaNumeric_field = "";
  }
  else
  {
      AlphaNumeric_field = doc.js_AlphaNumeric.value;
  }

if(typeof doc.js_Alpha == "undefined")
  {
      Alpha_field = "";
  }
  else
  {
      Alpha_field = doc.js_Alpha.value;
  }


  if(typeof doc.js_Email == "undefined")
  {
      email_field = "";
      
  }
  else
  {
      email_field = doc.js_Email.value;
     
  }


  if(typeof doc.js_Date == "undefined")
  {
      date_field = "";
  }
  else
  {
      date_field = doc.js_Date.value;

  }

  if(typeof doc.js_File == "undefined")
  {
    file_field = "";
  }
  else
  {
    file_field = doc.js_File.value;
  }

 if(typeof doc.js_Price == "undefined")
  {
    price_field = "";
  }
 else
  {
    price_field = doc.js_Price.value;
  }

  if(typeof doc.js_Image == "undefined")
  {
    image_field = "";
  }
 else
  {
    image_field = doc.js_Image.value;
  }

 if(typeof doc.js_Phone == "undefined")
  {
    phone_field = "";
  }
 else
  {
    phone_field = doc.js_Phone.value;
  }

   str = "";

   //calls function is_blank for blank validation, if blank_field is not null

     if(blank_field != "")
     {

       //creats array in which values stores without comma
        str_blank_field = blank_field.split(",");

        //loop for getting value from array for validating fields.
        for(a=0; a<str_blank_field.length; a++)
         {

            //getting error lables for messages
            tmp_str_FlType = str_blank_field[a];

             a=a+1;
             //alert(tmp_str_FlType);

            //getting field name
             tmp_str_FldName = str_blank_field[a];

            //getting value of form fields
            if(tmp_str_FlType != "mul")
            {
              tmp_str_value = eval('document.'+doc.name+'.'+str_blank_field[a]+'.value');
            }
            else
            {
              tmp_str_value = "";
            }
             a=a+1;
            //getting error lables for messages
            tmp_err_Mess2 = str_blank_field[a];

           //calls function for blank validation

             switch(tmp_str_FlType)
	     {
                case 'text':
                 tmp_Blank_validate = isBlank(tmp_str_value);
                 tmp_str_Mess1 = "Please enter ";
  	        break;
                case 'check':
                 tmp_Blank_validate = "checked";
                 if(eval('document.'+doc.name+'.'+tmp_str_FldName+'.checked') == false)
                 {
                   tmp_Blank_validate = "";
                   tmp_str_Mess1 = "Please check ";
                 }
                break;
                case 'radio':
                 tmp_Blank_validate = "";
                 tmp_str_Mess1 = "Please check ";

                 radiogroup = eval('document.'+doc.name+'.elements[tmp_str_FldName]');
                  for(var r = 0 ; r < radiogroup.length ; ++r)
	           {
	            if(radiogroup[r].checked)
	            {
	              tmp_Blank_validate = "checked";
	            }
	           }
                break;
	        case 'select':
                 tmp_Blank_validate = "selected";
                 if((eval('document.'+doc.name+'.'+tmp_str_FldName+'.selected') == true) || (tmp_str_value == ""))
                 {
                   tmp_Blank_validate = "";
                   tmp_str_Mess1 = "Please select ";
                 }
                break;
	        case 'mul':
                 tmp_Blank_validate = "selected";
                 mulCnt  = eval('document.'+doc.name+'["'+tmp_str_FldName+'"].length');
                 selMulCnt = 0;
		  /* loop through the selected titles.  */
		  for(m=0; m<mulCnt; m++)
		  {
		    tmp_str_value
		    if(eval('document.'+doc.name+'["'+tmp_str_FldName+'"]['+m+'].selected') == true)
		    {
		      if(eval('document.'+doc.name+'["'+tmp_str_FldName+'"]['+m+'].value' != ""))
		      {
		        selMulCnt++;
		      }
		    }
		  }
		  if(selMulCnt == 0)
		  {
		    tmp_Blank_validate = "";
	            tmp_str_Mess1      = "Please select ";
                  }
                break;
            }
          //if value of tmp_validate = "", sets the error message.
          if(tmp_Blank_validate == "")
           {
              str +=  tmp_str_Mess1 + tmp_err_Mess2 + "\n";
           }
         }
     }

//calls function isNumeric for numeric validation, if numeric_field is not null

     if(numeric_field != "")
     {
       //creats array in which values stores without comma
       str_numeric_field = numeric_field.split(",");

       //loop for getting value from array for validating fields.
       for(a=0; a<str_numeric_field.length; a++)
       {
         //getting value of form fields
	 tmp_str = eval('document.'+doc.name+'.'+str_numeric_field[a]+'.value');

	  a=a+1;

	 //getting error lables for messages
	 tmp_err_message = str_numeric_field[a];



	   //calls function for Numeric(0-9) validation
	   tmp_validate = isNumeric(tmp_str);

	//if value of tmp_validate = -1 setting error message.
	if(tmp_validate == -1)
	   {
	      str += "Please enter valid " + tmp_err_message + "\n";
	   }
       }
      }

  //calls function isAlphaNumeric for AlphaNumeric validation, if AlphaNumeric_field is not null

      if(AlphaNumeric_field != "")
      {

        //creats array in which values stores without comma
        str_alphanumeric_field = AlphaNumeric_field.split(",");

         //loop for getting value from array for validating fields.
         for(a=0; a<str_alphanumeric_field.length; a++)
          {

            //getting value of form field
            tmp_str = eval('document.'+doc.name+'.'+str_alphanumeric_field[a]+'.value');

            a=a+1;

            //getting error lables for messages
            tmp_err_message = str_alphanumeric_field[a];

           //calls function for Alpha Numeric(A-Z and 0-9)  validation

           tmp_validate = isAlphaNumeric(tmp_str);

          //if value of tmp_validate = -1 setting error message
           if(tmp_validate == -1)
            {
               str += "Please enter valid" + tmp_err_message + "\n";
            }
          }
       }


  //calls function isAlpha for Alphabetic validation, if Alpha_field is not null

      if(Alpha_field != "")
            {

              //creats array in which values stores without comma
              str_alpha_field = Alpha_field.split(",");

               //loop for getting value from array for validating fields.
               for(a=0; a<str_alpha_field.length; a++)
                {

                  //getting value of form field
                  tmp_str = eval('document.'+doc.name+'.'+str_alpha_field[a]+'.value');

                  a=a+1;

                  //getting error lables for messages
                  tmp_err_message = str_alpha_field[a];

                 //calls function for Alpha Numeric(A-Z and 0-9)  validation

                 tmp_validate = isAlpha(tmp_str);


                //if value of tmp_validate = -1 setting error message
                 if(tmp_validate == -1)
                  {
                     str += "Please enter valid " + tmp_err_message + "\n";
                  }
                }
             }







 //calls function isEmailId for Email Id validation, if email_field is not null


     if(email_field != "")
     {
       //creats array in which values stores without comma
       str_email_field = email_field.split(",");

       //loop for getting value from array for validating fields.
       for(a=0; a<str_email_field.length; a++)
        {

          //getting value of form field
	  tmp_str = eval('document.'+doc.name+'.'+str_email_field[a]+'.value');

	  a=a+1;

	  //getting error lables for messages
	  tmp_err_message = str_email_field[a];



	 //calls function for Email ID(xxx@yyy.com) validation

	 tmp_validate = isEmailId(tmp_str);

	 //if value of tmp_validate = -1 setting error message
	  if(tmp_validate == -1)
	    {
	       str += "Please enter valid " + tmp_err_message + " \n";
            }
        }
     }

      //calls function isDate for Date validation, if date_field is not null

       if(date_field != "")
          {
            //creats array in which values stores without comma
            str_date_field = date_field.split(",");

            //loop for getting value from array for validating fields.
            for(a=0; a<str_date_field.length; a++)
             {

             //getting date format
             tmp_date_format = str_date_field[a];

             a=a+1;

            //getting value of form field
     	    tmp_str = eval('document.'+doc.name+'.'+str_date_field[a]+'.value');

     	    a=a+1;

     	  //getting error lables for messages
     	  tmp_err_message = str_date_field[a];



     	 //calls function for date validation

     	 tmp_validate = isDate(tmp_str,tmp_date_format);

     	 //if value of tmp_validate = -1 setting error message

         if (tmp_str  != "")
         {
     	  if(tmp_validate != "")
     	    {
     	       str += "Please enter "+ tmp_err_message + " in DD-MM-YYYY format. \n";
            }
         }
        }
     }

 //calls function isFile for file extention validation, if file_field is not null

       if(file_field != "")
          {
           tmp_valFile = "";
            //creats array in which values stores without comma
            str_file_field = file_field.split(",");

            //loop for getting value from array for validating fields.
            for(a=0; a<str_file_field.length; a++)
             {
              //getting file extention format
              tmp_file_extention = str_file_field[a];
              a=a+1;

             //getting value of form field

     	     tmp_str = eval('document.'+doc.name+'.'+str_file_field[a]+'.value');

     	    a=a+1;

     	  //getting error lables for messages
     	  tmp_err_message = str_file_field[a];

     	 if(tmp_str != "")
     	 {
     	 //calls function for file validation

     	 tmp_validate = isFile(tmp_str,tmp_file_extention);

     	 //alert(tmp_validate);

     	 //if value of tmp_validate = -1 setting error message

     	  if(tmp_validate == -1)
     	    {
     	       /* Replace the # TAGs with "," */
	       var brk       = new RegExp('#','gi');
	       tmp_file_extention = tmp_file_extention.replace(brk,", ");

     	       str += "please upload  "+tmp_file_extention+"  extension file for "+tmp_err_message+ "\n";
            }
          else
            {
              tmp_valFile = "done";
            }
          }
         }
     }

 //calls function isPrice for Price validation, if price_field is not null

     if(price_field != "")
     {
       //creats array in which values stores without comma
       str_price_field = price_field.split(",");

       //loop for getting value from array for validating fields.
       for(a=0; a<str_price_field.length; a++)
        {
          //getting value of form field
	  tmp_str = eval('document.'+doc.name+'.'+str_price_field[a]+'.value');
	  a=a+1;

	  //getting error lables for messages
	  tmp_err_message = str_price_field[a];

	 //calls function for Price(99.99) validation

	 if(tmp_str != "")
	 {
	   tmp_validate = isPrice(tmp_str);

	 //if value of tmp_validate = 0 setting error message
	  if(tmp_validate == 0)
	    {
	       str += "Please enter "+tmp_err_message+" Price in 9.99(Price) format.\n";
            }
         }

        }
     }

 //calls function isImage for image height and width validation, if image_field is not null

      //alert(tmp_valFile);

       if((image_field != "") && (tmp_valFile == "done"))
          {
            //creats array in which values stores without comma
            arr_image_field = image_field.split(",");

            //loop for getting value from array for validating fields.
            for(a=0; a<arr_image_field.length; a++)
             {
              //getting the images height and width
              tmp_image_dim = arr_image_field[a];
              a=a+1;

              tmp_arr_dimention = tmp_image_dim.split("#");
              tmp_int_width = tmp_arr_dimention[0];
              tmp_int_height = tmp_arr_dimention[1];

             //getting value of form field
     	     tmp_str = eval('document.'+doc.name+'.'+arr_image_field[a]+'.value');
     	     a=a+1;

     	  //getting error lables for messages
     	  tmp_err_message = arr_image_field[a];
     	  //alert(tmp_err_message);

     	    if(tmp_str != "")
             {
     	         //calls function for file validation

     	          tmp_validate = isImage(doc,tmp_str,tmp_int_width,tmp_int_height);

     	          //if value of tmp_validate = -1 setting error message

     	          if(tmp_validate == -1)
     	          {
     	            str += tmp_err_message+" image width and height should be "+tmp_int_width+" by "+tmp_int_height+" pixels. \n";
                  }
             }
          }
     }

//calls function isPhoneNo for validating values for phone numbers
     if(phone_field != "")
     {
       //creats array in which values stores without comma
       arr_phone_field = phone_field.split(",");

       //loop for getting value from array for validating fields.
       for(a=0; a<arr_phone_field.length; a++)
       {
         //getting value of form fields
	 tmp_str = eval('document.'+doc.name+'.'+arr_phone_field[a]+'.value');

	  a=a+1;

	 //getting error lables for messages
	 tmp_err_message = arr_phone_field[a];


	   //calls function for phone no. validation
	   tmp_validate = isPhoneNo(tmp_str);

	//if value of tmp_validate = -1 setting error message.
	if(tmp_validate)
	   {
	      str += "Please enter valid " + tmp_err_message + "\n";
	   }
       }
      }

// if str contains the error messages return false
// else return true

   if(str)
    {
       alert(str);
       return false;
    }
   else
    {
       return true;
    }

}

function valid_char(doc)
{
	txtChar = doc.value;
	txtVal  = new String(txtChar);
	txtLen  = txtVal.length;


	txtArr  = txtVal.split("\n");
	brkNum  = txtArr.length;
	manLine = brkNum;

	for(i=0;i<brkNum;i++)
	{

		if(txtArr[i].length < 24)
		{
			txtLen = txtLen + (23 - (txtArr[i].length));
		}

		if(txtArr[i].length > 23)
		{
			parLine = txtArr[i].length;
			manLine = manLine + Math.ceil(parLine/23);
		}

	}

	if(txtLen >= 235 || manLine > 13)
	{
	   alert("Maximum 235 characters including white space and line breaks are allowed");
	   doc.focus();
	   return false;
	}
}

function valid_space(doc)
{
	txtChar = doc.value;
	txtVal = new String(txtChar);
	txtLen = txtVal.length;

	if(txtLen > 18)
	{
		txtArr  = txtVal.split("\n");
		brkNum  = txtArr.length;

		for(j=0;j<brkNum;j++)
		{

			spcArr  = txtArr[j].split(" ");
			spcNum  = spcArr.length;

			for(i=0;i<spcNum;i++)
			{
				if(spcArr[i].length > 18)
				{
					alert("Please write 'Description' text with word spacing and line break.\n Words having 18 or more letters can break the site design.");
					doc.focus();
					return false;
				}
			}
		}
	}
}

function submit_form(frm_name)
{
  eval('frm_name.submit();');
}

function setaccept(frm,accept)
{
	eval("thisDoc = document."+frm)
	thisDoc['accept'].value = accept;
	return true;
}
function isDeleteRec(frm,name)
{
	eval("thisDoc = document."+frm)

	if(confirm("Are you sure you want to delete?"))
	{
		thisDoc[name].value = "yes";
		return true;
	}
	else
	{
		return false;
	}
}
//************** function for validates the form feilds *****************
function validate_form(doc)
{
  
  //On Error Resume Next;

  // Name      : validate_form.

  // Purpose   : validate the form fields.

  // Inputs    : all form feilds values

  // Outputs   : return true -> if user enter enter validate data
  //             else return false
  //             alert box displays with error message.
  // Calls     : isBlank(tmp_str) -> checks the field is blank or containing
  //                           only white speces.
  //             isAlphaNemeric(tmp_str) -> checks the feild is Alpha-Nemeric
  //     isNumeric(tmp_int) -> checks the field is nemeric
  //     isEmailId(tmp_str) -> checks the field is in email id
  //                            format(xxx@yyy.com)



 //declearing veriables

 var str;                     // stores error messages.
 var blank_field;             // stores a string of form fields and error lable for
                              // blank validation.
 var numeric_field;           // stores a string of form fields and error lable for
                              // numeric[0-9] validation.
 var mobile_field;           // stores a string of form fields and error lable for                              
 var AlphaNumeric_field;      // stores a string of form fields and error lable for
                              // Alpha-Numeric[A-Z]and[0-9] validation.

 var Alpha_field;          // stores a string of form fields and error lable for
                              // Alpha-Numeric[A-Z]and[0-9] validation.
 var email_field;             // stores a string of form fields and error lable for
                              // email[xxx@zz.com] validation.
 var date_field               // stores a string of form date fields and error lable for
                              // date validation
 var file_field;              // stores a string of form file fields and error lable for
                              // date validation valid extentions
 var price_field;             // stores a string of form fields and error lable for
                              // price validation
 var image_field;             // stores a string of image's maximum width and height & name

 var phone_field;             // stores a value of phone no
var amount_field;             // stores a value of phone no
var length_field;
var rate_field;             // stores a string of form fields and error lable for
 // of form field and error lable for image validation
 var str_blank_field;         // array in which value of blank_field stored by
                              // comma separating.
 var str_numeric_field;       // array in which value of numeric_field stored by
 var str_mobile_field;       // array in which value of numeric_field stored by
                              // comma separating.
 var str_alphanumeric_field;  // array in which value of AlphaNumeric_field stored by
                              // comma separating.
 var str_alpha_field;      // array in which value of AlphaNumeric_field stored by
                              // comma separating.

 var str_email_field;         // array in which value of email_field stored by
                              // comma separating.
 var str_date_field;          // array in which value of date_field stored by
                              // comma separating.
 var str_file_field;          // array in which value of file_field stored by
                              // comma separating.  allowd file extetions are
            // seperated by #.
 var str_price_field;         // array in which value of price_field stored by
                              // comma separating.
 var str_image_field;         // array in which value of image_field stored by
                              // comma separating.
 var arr_phone_field;         // stores a form field details of Phone fields bycomma seperated
 var str_rate_field;         // array in which value of rate_field stored by
 var str_length_field;

 var float_field;   //array in which value of float_field stored by
                              // comma separating.

 var floatMaxLen_field;

 var tmp_valFile;             // veriable related with file and image size and width .

 tmp_valFile = "";

var cmpdate_field;             // stores a string of compare date form fields and  lable for

//alert(doc.js_Blank.value);
/* if form field is not available setts the null value **/
//alert(document.frm_generalTheme.js_Blank.value);
//alert(document.frmHipPropertInfo.js_Blank.value);

  if(typeof doc.js_Blank == "undefined")
  {
    blank_field = "";
  }
  else
  {
    blank_field = doc.js_Blank.value;
  }
  if(typeof doc.js_confirm == "undefined")
  {
    confirm_field = "";
  }
  else
  {
    confirm_field = doc.js_confirm.value;
  }

  if(typeof doc.js_Numeric == "undefined")
  {
     numeric_field = "";
  }
  else
  {
      numeric_field = doc.js_Numeric.value;
  }
	if(typeof doc.js_mobile == "undefined")
  {
     mobile_field = "";
  }
  else
  {
      mobile_field = doc.js_mobile.value;
  }

  if(typeof doc.js_AlphaNumeric == "undefined")
  {
      AlphaNumeric_field = "";
  }
  else
  {
      AlphaNumeric_field = doc.js_AlphaNumeric.value;
  }

if(typeof doc.js_Alpha == "undefined")
  {
      Alpha_field = "";
  }
  else
  {
      Alpha_field = doc.js_Alpha.value;
  }


  if(typeof doc.js_Email == "undefined")
  {
      email_field = "";
  }
  else
  {
      email_field = doc.js_Email.value;
  }


  if(typeof doc.js_Date == "undefined")
  {
      date_field = "";
  }
  else
  {
      date_field = doc.js_Date.value;
  }

  if(typeof doc.js_File == "undefined")
  {
    file_field = "";
  }
  else
  {
    file_field = doc.js_File.value;
  }

 if(typeof doc.js_Price == "undefined")
  {
    price_field = "";
  }
 else
  {
    price_field = doc.js_Price.value;
  }
if(typeof doc.js_Rate == "undefined")
  {
    rate_field = "";
  }
 	else
  {
    rate_field = doc.js_Rate.value;
  }
  if(typeof doc.js_Image == "undefined")
  {
    image_field = "";
  }
 else
  {
    image_field = doc.js_Image.value;
  }

 if(typeof doc.js_Phone == "undefined")
  {
    phone_field = "";
  }
 else
  {
    phone_field = doc.js_Phone.value;
  }
  
  if(typeof doc.js_Amount == "undefined")
	  {
	    amount_field = "";
	  }
	 else
	  {
	    amount_field = doc.js_Amount.value;
  }
  
  if(typeof doc.js_Amount_comma == "undefined")
		  {
		    amount_field_comma = "";
		  }
		 else
		  {
		    amount_field_comma = doc.js_Amount_comma.value;
  }

  if(typeof doc.js_Check == "undefined")
  {
    check_field = "";
  }
  else
  {
    check_field = doc.js_Check.value;
  }

  if(typeof doc.js_Check1 == "undefined")
  {
      check_field1 = "";
  }
  else
  {
      check_field1 = doc.js_Check1.value;
  }


  if(typeof doc.js_Checkgroup == "undefined")
    {
      checkgrp_field = "";
    }
    else
    {
      checkgrp_field = doc.js_Checkgroup.value;
  }
if(typeof doc.js_Length == "undefined")
  {
    length_field = "";
  }
 else
  {
    length_field = doc.js_Length.value;
  }
  //alert(typeof doc.js_Float);
  if(typeof doc.js_Float == "undefined")
  {
    float_field = "";
  }
  else
  {
    float_field = doc.js_Float.value;
  }

  if(typeof doc.js_MaxLenFloat == "undefined")
  {
    floatMaxLen_field = "";

  }
  else
  {
    floatMaxLen_field = doc.js_MaxLenFloat.value;
    //alert("un2 =" +floatMaxLen_field);
  }


  if(typeof doc.js_Cmpdate == "undefined")
  {
  cmpdate_field = "";
  }
  else
  {
  cmpdate_field = doc.js_Cmpdate.value;
   }

   str = "";

  //calls function to confirm the pasword

  if(confirm_field != "")
  {
    str_confirm_field = confirm_field.split(",");

    for(a=0; a<str_confirm_field.length; a++)
         {
          tmp_str_NewPwd = eval('document.'+doc.name+'.'+str_confirm_field[a]+'.value');

          a=a+1;

                tmp_str_CrfPwd = eval('document.'+doc.name+'.'+str_confirm_field[a]+'.value');

            if(tmp_str_NewPwd != tmp_str_CrfPwd)
            {
                 str += "password and confirm password should be same.";
            }

         }
  }


  //calls function is_blank for blank validation, if blank_field is not null

     if(blank_field != "")
     {
      //creats array in which values stores without comma

        str_blank_field = blank_field.split(",");

        //loop for getting value from array for validating fields.
        for(a=0; a<str_blank_field.length; a++)
         {
            //getting error lables for messages
            tmp_str_FlType = str_blank_field[a];

           // alert(tmp_str_FlType);

             a=a+1;

            //getting field name
             tmp_str_FldName = str_blank_field[a];

//alert("document."+doc.name+"."+tmp_str_FldName);

              if(doc.name == 'frmPricing' || doc.name == 'frmTenurePrice')
              {
              	var sTest = document.getElementById(str_blank_field[a]);
                //tmp_str_value = eval("document.getElementById('"+str_blank_field[a]+"').value");
              }
              else
              {
		var sTest = eval("document."+doc.name+"."+tmp_str_FldName);
              }

      if(sTest)
      {
            //getting value of form fields
            if(tmp_str_FlType != "mul")
            {
              if(doc.name == 'frmPricing' || doc.name == 'frmTenurePrice')
              {
                tmp_str_value = eval("document.getElementById('"+str_blank_field[a]+"').value");
              }
              else
              {
                tmp_str_value = eval('document.'+doc.name+'.'+str_blank_field[a]+'.value');
              }
            }
            else
            {
              tmp_str_value = "";
            }
             a=a+1;
            //getting error lables for messages
            tmp_err_Mess2 = str_blank_field[a];
           //calls function for blank validation
             switch(tmp_str_FlType)
       {
                case 'text':
                 tmp_Blank_validate = isBlank(tmp_str_value); 
                 tmp_str_Mess1 = "Please enter ";
									break;
                case 'check':
                 tmp_Blank_validate = "checked";
                 if(eval('document.'+doc.name+'.'+tmp_str_FldName+'.checked') == false)
                 {
                   tmp_Blank_validate = "";
                   tmp_str_Mess1 = "Please check ";
                 }
                break;
                case 'radio':
                 tmp_Blank_validate = "";
                 tmp_str_Mess1 = "Please select ";

                 radiogroup = eval('document.'+doc.name+'.elements[tmp_str_FldName]');

                  for(var r = 0 ; r < radiogroup.length ; ++r)
             {
              if(radiogroup[r].checked)
              {
                tmp_Blank_validate = "checked";
              }
             }
                break;
          case 'select':
                 tmp_Blank_validate = "selected";
                 //alert(tmp_str_value);
                 if((eval('document.'+doc.name+'.'+tmp_str_FldName+'.selected') == true) || (tmp_str_value == ""))
                 {
                   tmp_Blank_validate = "";
                   tmp_str_Mess1 = "Please select ";
                 }
                break;
          case 'mul':                 
                 tmp_Blank_validate = "selected";
                 mulCnt  = eval('document.'+doc.name+'["'+tmp_str_FldName+'"].length');
                 selMulCnt = 0;
      /* loop through the selected titles.  */
      for(m=0; m<mulCnt; m++)
      {
        tmp_str_value
        if(eval('document.'+doc.name+'["'+tmp_str_FldName+'"]['+m+'].selected') == true)
        {
          if(eval('document.'+doc.name+'["'+tmp_str_FldName+'"]['+m+'].value' != ""))
          {
            selMulCnt++;
          }
        }
      }

		if(selMulCnt == 0) {
			tmp_Blank_validate = "";
			tmp_str_Mess1      = "Please select ";
		}
		break;
	} 
          //if value of tmp_validate = "", sets the error message.
          if(tmp_Blank_validate == "")
           {
              str +=  tmp_str_Mess1 + tmp_err_Mess2 + "\n";
           }
  }
  else
  {
     a = a+1;
  }
         }
     }


//calls function isNumeric for numeric validation, if numeric_field is not null

    if(numeric_field != "")
    {
      //creats array in which values stores without comma
      str_numeric_field = numeric_field.split(",");


      //loop for getting value from array for validating fields.
      for(a=0; a<str_numeric_field.length; a++)
      {

        //getting value of form fields
        var tmp_dfn = eval('document.'+doc.name+'.'+str_numeric_field[a]);
        if(tmp_dfn!= undefined)
        {

        	tmp_str = eval('document.'+doc.name+'.'+str_numeric_field[a]+'.value');
        	a=a+1;

        	//getting error lables for messages
        	tmp_err_message = str_numeric_field[a];


        	//calls function for Numeric(0-9) validation
        	tmp_validate = isNumeric(tmp_str);

        	//if value of tmp_validate = -1 setting error message.
        	if(tmp_validate == -1)
        	{
          	str += "Please enter valid " + tmp_err_message + ".\n";
        	}
        }
        else
        {
        	a = a+1;
        }
      }
   }

//calls function Ismobile for mobile validation, if mobile_field is not null

    if(mobile_field != "")
    {
      //creats array in which values stores without comma
      str_mobile_field = mobile_field.split(",");


      //loop for getting value from array for validating fields.
      for(a=0; a<str_mobile_field.length; a++)
      {

        //getting value of form fields
        var tmp_dfn = eval('document.'+doc.name+'.'+str_mobile_field[a]);
        if(tmp_dfn!= undefined)
        {

        	tmp_str = eval('document.'+doc.name+'.'+str_mobile_field[a]+'.value');
        	a=a+1;

        	//getting error lables for messages
        	tmp_err_message = str_mobile_field[a];

            //for checking nri citizenship
			if(document.getElementById('nri').checked==true)
			{
				var ctzen=1;
			}
			else
			{
               var ctzen=0;
			}
        	//calls function for Numeric(0-9) validation
        	tmp_validate = Ismobile(tmp_str);

        	//if value of tmp_validate = -1 setting error message.
        	if(tmp_validate == -1 && ctzen==0)
        	{
          	str += "Please enter 10 digit " + tmp_err_message + ".\n";
        	}
        	if(tmp_validate == -2)
					{
					          	str += "Please enter Valid " + tmp_err_message + ".\n";
        	}
        }
        else
        {
        	a = a+1;
        }
      }
   }


  //calls function isAlphaNumeric for AlphaNumeric validation, if AlphaNumeric_field is not null

      if(AlphaNumeric_field != "")
      {
        //creats array in which values stores without comma
        str_alphanumeric_field = AlphaNumeric_field.split(",");

         //loop for getting value from array for validating fields.
         for(a=0; a<str_alphanumeric_field.length; a++)
          {
            //getting value of form field
            tmp_str = eval('document.'+doc.name+'.'+str_alphanumeric_field[a]+'.value');

            a=a+1;

            //getting error lables for messages
            tmp_err_message = str_alphanumeric_field[a];

           //calls function for Alpha Numeric(A-Z and 0-9)  validation

           tmp_validate = isAlphaNumeric(tmp_str);

          //if value of tmp_validate = -1 setting error message
           if(tmp_validate == -1)
            {
               str += "Please enter valid" + tmp_err_message + ".\n";
            }
          }
       }


  //calls function isAlpha for Alphabetic validation, if Alpha_field is not null
      if(Alpha_field != "")
      {

        //creats array in which values stores without comma
        str_alpha_field = Alpha_field.split(",");

         //loop for getting value from array for validating fields.
         for(a=0; a<str_alpha_field.length; a++)
         {

          //getting value of form field
          tmp_str = eval('document.'+doc.name+'.'+str_alpha_field[a]+'.value');

          a=a+1;

          //getting error lables for messages
          tmp_err_message = str_alpha_field[a];

          //calls function for Alpha Numeric(A-Z and 0-9)  validation

          tmp_validate = isAlpha(tmp_str);

          //if value of tmp_validate = -1 setting error message
          if(tmp_validate == -1)
          {
             str += "Please enter valid " + tmp_err_message + ".\n";
          }
        }
      }

 //calls function isEmailId for Email Id validation, if email_field is not null

/*
     if(email_field != "")
     {
        //creats array in which values stores without comma
        str_email_field = email_field.split(",");

        //loop for getting value from array for validating fields.
        for(a=0; a<str_email_field.length; a++)
        {

          //getting value of form field
          tmp_str = eval('document.'+doc.name+'.'+str_email_field[a]+'.value');

          a=a+1;

          //getting error lables for messages
          tmp_err_message = str_email_field[a];

          //calls function for Email ID(xxx@yyy.com) validation

          if(tmp_str != "") {
						tmp_validate = isEmailId(tmp_str);

						//if value of tmp_validate = -1 setting error message
						if(tmp_validate == -1)
						{
							str += "Please enter a valid " + tmp_err_message + "\n";
						}
					}
        }
      }*/

      //calls function isDate for Date validation, if date_field is not null

       if(date_field != "")
       {
          //creats array in which values stores without comma
          str_date_field = date_field.split(",");

          //loop for getting value from array for validating fields.
          for(a=0; a<str_date_field.length; a++)
          {
            //getting date format
            tmp_date_format = str_date_field[a];
            //alert(tmp_date_format);
            //a++;

            //getting value of form field
            tmp_str = eval('document.'+doc.name+'.'+str_date_field[a]+'.value');

            a=a+1;

            //getting error lables for messages
            tmp_err_message = str_date_field[a];

            //calls function for date validation

            //tmp_validate = isDate(tmp_str,tmp_date_format);

            tmp_validate = validDate(tmp_str);

           //if value of tmp_validate = 0 setting error message

           if (tmp_str  != "")
           {
              if(tmp_validate ==0 )
              {
                   str += "Please enter "+ tmp_err_message + " in DD/MM/YYYY format. \n";
              }
           }
        }
     }

   //calls function isFile for file extention validation, if file_field is not null
    if(file_field != "")
    {
      tmp_valFile = "";
      //creats array in which values stores without comma
      str_file_field = file_field.split(",");

      //loop for getting value from array for validating fields.
      for(a=0; a<str_file_field.length; a++)
      {
        //getting file extention format
        tmp_file_extention = str_file_field[a];
        a=a+1;

        //getting value of form field

        tmp_str = eval('document.'+doc.name+'.'+str_file_field[a]+'.value');
        //tmp_str = str_file_field[a];
        a=a+1;

        //getting error lables for messages
        tmp_err_message = str_file_field[a];

        if(tmp_str != "")
        {
          //calls function for file validation

          tmp_validate = isFile(tmp_str, tmp_file_extention);

          //if value of tmp_validate = -1 setting error message

          if(tmp_validate == -1)
          {
            /* Replace the # TAGs with "," */
            var brk       = new RegExp('#','gi');
            tmp_file_extention = tmp_file_extention.replace(brk,", ");

            str += "Please upload "+tmp_file_extention+" extension file for "+tmp_err_message+ ".\n";
          }
          else
          {
            tmp_valFile = "done";
          }
        }
      }
    }

    /* calls the LenCheck() */
    if(length_field != "")
    {
       //creats array in which values stores without comma
       str_length_field = length_field.split(",");

       //eval("thisDoc=document."+doc);

       //loop for getting value from array for validating fields.
       for(a=0; a<str_length_field.length; a++)
        {

          //getting value of form field
     tmp_str = eval('document.'+doc.name+'.'+str_length_field[a]+'.value');

   //tmp_str_name = str_length_field[a];
   //tmp_str = thisDoc[tmp_str_name].value;

    //alert(tmp_str);


    a=a+1;

    //getting error lables for messages
    tmp_err_message = str_length_field[a];



   //calls function for Email ID(xxx@yyy.com) validation
   //alert(tmp_str);

     if(tmp_str != "")
     {
      //alert("test");
     tmp_validate = isLenCheck(tmp_str);

     //if value of tmp_validate = -1 setting error message
      if(tmp_validate == -1)
        {
           str += "Please enter less than 5 or 5 characters in " + tmp_err_message + " field. \n";
        }
           }
        }
     }




 //calls function isPrice for Price validation, if price_field is not null

     if(price_field != "")
     {
       //creats array in which values stores without comma
       str_price_field = price_field.split(",");

       //loop for getting value from array for validating fields.
       for(a=0; a<str_price_field.length; a++)
        {
          //getting value of form field
    tmp_str = eval('document.'+doc.name+'.'+str_price_field[a]+'.value');
    a=a+1;

    //getting error lables for messages
    tmp_err_message = str_price_field[a];

   //calls function for Price(99.99) validation

   if(tmp_str != "")
   {
     tmp_validate = isPrice(tmp_str);

   //if value of tmp_validate = 0 setting error message
    if(tmp_validate == 0)
      {
         str += "Please enter "+tmp_err_message+" Price in 9.99(Price) format.\n";
            }
         }

        }
     }


//calls function isRate for Price validation, if rate_field is not null
	
	     if(rate_field != "")
	     {
	       //creats array in which values stores without comma
	       str_rate_field = rate_field.split(",");
	
	       //loop for getting value from array for validating fields.
	       for(a=0; a<str_rate_field.length; a++)
	        {
	          //getting value of form field
	    tmp_str = eval('document.'+doc.name+'.'+str_rate_field[a]+'.value');
	    a=a+1;
	
	    //getting error lables for messages
	    tmp_err_message = str_rate_field[a];
	
	   //calls function for Price(99.99) validation
	
	   if(tmp_str != "")
	   {
	     tmp_validate = isRate(tmp_str);
	
	   //if value of tmp_validate = 0 setting error message
	    if(tmp_validate == 0)
	      {
	         str += "Please enter "+tmp_err_message+" Price in 9.99 (Rate) format.\n";
	      }
	   }
	 }
 }


 //calls function isImage for image height and width validation, if image_field is not null

      //alert(tmp_valFile);

       if((image_field != "") && (tmp_valFile == "done"))
          {
            //creats array in which values stores without comma
            arr_image_field = image_field.split(",");

            //loop for getting value from array for validating fields.
            for(a=0; a<arr_image_field.length; a++)
             {
              //getting the images height and width
              tmp_image_dim = arr_image_field[a];
              a=a+1;

              tmp_arr_dimention = tmp_image_dim.split("#");
              tmp_int_width = tmp_arr_dimention[0];
              tmp_int_height = tmp_arr_dimention[1];

             //getting value of form field
           tmp_str = eval('document.'+doc.name+'.'+arr_image_field[a]+'.value');
           a=a+1;

        //getting error lables for messages
        tmp_err_message = arr_image_field[a];
        //alert(tmp_err_message);

          if(tmp_str != "")
             {
               //calls function for file validation

                tmp_validate = isImage(doc,tmp_str,tmp_int_width,tmp_int_height);

                //if value of tmp_validate = -1 setting error message

                if(tmp_validate == -1)
                {
                  str += tmp_err_message+" image width and height should be "+tmp_int_width+" by "+tmp_int_height+" pixels. \n";
                  }
             }
          }
     }

//calls function isPhoneNo for validating values for phone numbers
     if(amount_field != "")
     {
       //creats array in which values stores without comma
       arr_amount_field = amount_field.split(",");

       //loop for getting value from array for validating fields.
       for(a=0; a<arr_amount_field.length; a++)
       {
         //getting value of form fields
   tmp_str = eval('document.'+doc.name+'.'+arr_amount_field[a]+'.value');

    a=a+1;

   //getting error lables for messages
   tmp_err_message = arr_amount_field[a];


     //calls function for phone no. validation
     tmp_validate = isAmount_Val(tmp_str);

  //if value of tmp_validate = -1 setting error message.
  if(tmp_validate)
     {
        str += "Please enter valid " + tmp_err_message + ".\n";
     }
       }
      }
/*********** validate amount with commas ***********/
if(amount_field_comma != "")
     {
       //creats array in which values stores without comma
       arr_amount_field_comma = amount_field_comma.split("#");

       //loop for getting value from array for validating fields.
       for(a=0; a<arr_amount_field_comma.length; a++)
       {
         //getting value of form fields
   tmp_str = eval('document.'+doc.name+'.'+arr_amount_field_comma[a]+'.value');
		tmp_str = tmp_str.replace(/,/g,"");
    a=a+1;

   //getting error lables for messages
   tmp_err_message_comma = arr_amount_field_comma[a];


     //calls function for phone no. validation
     tmp_validate_comma = isAmount_Val(tmp_str);

  //if value of tmp_validate = -1 setting error message.
  if(tmp_validate_comma)
     {
        str += "Please enter valid " + tmp_err_message_comma + ".\n";
     }
       }
 }

//calls function isPhoneNo for validating values for phone numbers
     if(phone_field != "")
     {
       //creats array in which values stores without comma
       arr_phone_field = phone_field.split(",");

       //loop for getting value from array for validating fields.
       for(a=0; a<arr_phone_field.length; a++)
       {
         //getting value of form fields
   tmp_str = eval('document.'+doc.name+'.'+arr_phone_field[a]+'.value');

    a=a+1;

   //getting error lables for messages
   tmp_err_message = arr_phone_field[a];


     //calls function for phone no. validation
     tmp_validate = isPhoneNo(tmp_str);

  //if value of tmp_validate = -1 setting error message.
  if(tmp_validate)
     {
        str += "Please enter valid " + tmp_err_message + ".\n";
     }
       }
      }
      

   //to check wheather tenure documents are selected or not
   if(check_field != "")
   {
     var flag;
     eval("thisDoc=document."+doc.name);
     parentgroup = thisDoc.elements[check_field];

     for(var r = 0 ; r < parentgroup.length ; ++r)
     {
			if(parentgroup[r].checked)
			{
				flag = "false";
				break;
			}
			else
			{
				flag = "true";
			}
     }

     if(flag == "true")
     {
      str += "Please select tenure document. \n";
     }

   }

   //to check wheather tenure documents are selected or not
     if(check_field1 != "")
     {
        var flag;
        eval("thisDoc=document."+doc.name);

        checkgroup = thisDoc.elements[check_field1];

        var length = checkgroup.length;

        //alert(length);

        if(typeof length == "undefined")
        {
          if(thisDoc[check_field1].checked)
          {
            flag = "false";
          }
          else
          {
            flag = "true";
          }
  }
        else
        {
          for(var r = 0 ; r < checkgroup.length ; ++r)
          {
            if(checkgroup[r].checked)
            {
              flag = "false";
              break;
            }
            else
            {
              flag = "true";
            }
          }
        }
        if(flag == "true")
        {
          //just patch for single form
          if(doc.name == "frmInstInter")
          {
            str += "Please select Case Owner. \n";
          }
          else
          {
            str += "Please check subscriber privileges. \n";
          }
        }

   }

     if(float_field != "")
     {
       //alert("test");
       //creats array in which values stores without comma
       arr_float_field = float_field.split(",");

       //loop for getting value from array for validating fields.
       for(a=0; a<arr_float_field.length; a++)
       {
         //getting value of form fields
   tmp_str = eval('document.'+doc.name+'.'+arr_float_field[a]+'.value');


    a=a+1;

   //getting error lables for messages
   tmp_err_message = arr_float_field[a];


     //calls function for phone no. validation
     tmp_validate = isFloat(tmp_str);

     //alert(tmp_validate);

  //if value of tmp_validate = -1 setting error message.
  if(!tmp_validate)
     {
        str += "Please enter valid " + tmp_err_message + ".\n";
     }
       }
      }
     if(floatMaxLen_field != "")
     {
       //alert("test");
       //creats array in which values stores without comma
       arr_float_field = floatMaxLen_field.split(",");

       //loop for getting value from array for validating fields.
       for(a=0; a<arr_float_field.length; a++)
       {
         //getting value of form fields
   tmp_str = eval('document.'+doc.name+'.'+arr_float_field[a]+'.value');

    a=a+1;

   //getting error lables for messages
   tmp_err_message = arr_float_field[a];
   a=a+1;
   //getting max size of float
   var tmp_int_maxSize = arr_float_field[a];

     //calls function for phone no. validation
     tmp_validate = isFloat(tmp_str);

     //alert(tmp_validate);

  //if value of tmp_validate = -1 setting error message.
       if(!tmp_validate)
       {
    str += "Please enter valid " + tmp_err_message + ".\n";
       }
       else
       {
      var intstrLen = tmp_str.length;
      var intLoc    = tmp_str.lastIndexOf(".");
      //alert(intLoc);
    if (intLoc==-1)
    {
    intLoc = intstrLen;
    }

     var extVal    = (tmp_str.substring(0,intLoc)).length;
     if (extVal>tmp_int_maxSize)
     {
      str += "Too large value entered for " + tmp_err_message + ".Actual size of the field is "+tmp_int_maxSize+".\n";
     }

       }
       }
      }


  //function to compare date

    if(cmpdate_field != "")
     {

       //creats array in which values stores without comma
        str_cmpdate_field =cmpdate_field.split(",");

       for(a=0; a<str_cmpdate_field.length; a++)
       {
              tmp_date1 = str_cmpdate_field[a];
              var tmp_str_date1;
              a++;

              tmp_str_date1 = str_cmpdate_field[a];
              a++;

              tmp_date2 = str_cmpdate_field[a];
              var tmp_str_date2;
              a++;

              tmp_str_date2 = str_cmpdate_field[a];

             // alert("test");

      //getting value of form fields
        from_date = eval('document.'+doc.name+'.'+tmp_date1+'.value');

        to_date = eval('document.'+doc.name+'.'+tmp_date2+'.value');

             if (from_date=="" || to_date=="")
              {
             // str += "Enter Date \n";
              }
              else
              {

          //call function to get date difference

    if(isDate(from_date))
         {
          str += "Please enter "+tmp_str_date1+" in dd/MM/YYYY format.";
         }
     else if(isDate(to_date))
         {
          str += "Please enter "+tmp_str_date2+" in dd/MM/YYYY format.";
         }
         else
         {
            if(validate_date(from_date,to_date))
            {
              //alert(from_date);
              //alert(to_date);
             str +=tmp_str_date2+" field should contain date greater than "+tmp_str_date1+".\n";
            }
     }
       }

       }

      }


      if(checkgrp_field != "")
      {
        var flag;
        var  group;
        str_checkgrp_field = checkgrp_field.split(",");

          //loop for getting value from array for validating fields.
          for(a=0; a<str_checkgrp_field.length; a++)
           {


        eval("thisDoc=document."+doc.name);

        //group = thisDoc.elements[checkgrp_field];
        group = thisDoc.elements[str_checkgrp_field[a]];
        if (group == undefined)
        {

        }
        else
        {

     a=a+1;
    //getting field Name
    tmp_str_FldName = str_checkgrp_field[a];

    for(var r = 0 ; r <  group.length ; ++r)
    {
      if(group[r].checked)
      {
      flag = "false";
      break;
      }
      else
      {
      flag = "true";
      }
    }

    if(flag == "true")
    {
      str += "Please check "+tmp_str_FldName+".\n";
    }
        }

      }

}
// if str contains the error messages return false
// else return true
   if(str)
    {
       alert(str); // gives error message eg- Please enter blank field
       return false;
    }
   else
    {
       return true;

    }
}

$(document).ready(function() {
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
});



	
	$('.open-popup-link').magnificPopup({
  type: 'inline',
  midClick: true,
  mainClass: 'mfp-fade'
});