function SearchGridUI(SearchButtonID, TableID, IsScroll) {
    var prm = Sys.WebForms.PageRequestManager.getInstance();
    // $("select").select2({ dropdownAutoWidth: 'true' });
    $('#ajax').on('hidden.bs.modal', function () {
        $(this).removeData('bs.modal');
    });
    if (prm != null) {
        if (IsScroll == 1) {
            prm.add_beginRequest(function (sender, e) {
                var isAsync = sender._postBackSettings.async;
                var controlId = sender._postBackSettings.sourceElement.id;
                if (controlId == SearchButtonID) {
                    ScrollToSearch(controlId);
                }
            });
        }
        ApplyJSToTable(TableID);
        prm.add_endRequest(function () {
            ApplyJSToTable(TableID);
            //$("select").select2({ dropdownAutoWidth: 'true' });
        });
    }
}


function CheckToDelete() {
    var checkedValues = $('input:checkbox:checked').map(function () {
        return this.value;
    }).get();

    if (checkedValues == "") {
        alert("No Row Selected");
        return false;
    }
    else {
        //var result = window.confirm("Are you sure want to delete ?");
        //return result;
    }
}
function ScrollToSearch(controlId) {
    $('html, body').animate({
        scrollTop: ($('#' + controlId).first().offset().top)
    }, 500);
}





var specialKeys = new Array();
specialKeys.push(8); //Backspace
specialKeys.push(9);

$(".Numeric").keypress(function (e) {

    var specialKeys = new Array();
    specialKeys.push(8); //Backspace
    specialKeys.push(9);

    var keyCode = e.which ? e.which : e.keyCode
    var ret = ((keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1);
    if (ret == false)
        return false;
})

//$(".ScrollToSave").click(function (e) {
//    // Do client side button click stuff here.
//    $('html, body').animate({
//        scrollTop: ($('#'+e.target.id).first().offset().top)
//    }, 500);
//});

$(".Alphabet").keypress(function (e) {

    var specialKeys = new Array();
    specialKeys.push(8); //Backspace
    specialKeys.push(9);

    var keyCode = e.which ? e.which : e.keyCode
    var ret = ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || specialKeys.indexOf(keyCode) != -1);
    if (ret == false)
        return false;
})

$(".NumericDash").keypress(function (e) {

    var specialKeys = new Array();
    specialKeys.push(8); //Backspace
    specialKeys.push(9);

    var charCode = (e.which) ? e.which : event.keyCode
    if (charCode != 45 && charCode > 31 && (charCode < 48 || charCode > 57) || specialKeys.indexOf(keyCode) != -1)
        return false;
})



$(".DateOnly").keypress(function (e) {

    var specialKeys = new Array();
    specialKeys.push(8); //Backspace
    specialKeys.push(9);

    var charCode = (e.which) ? e.which : event.keyCode
    if (charCode != 45 && charCode > 31 && (charCode < 48 || charCode > 57) || specialKeys.indexOf(keyCode) != -1)
        return false;
})


$(".Decimal").keypress(function (e) {
    var specialKeys = new Array();
    specialKeys.push(8); //Backspace
    specialKeys.push(9);

    var charCode = (e.which) ? e.which : event.keyCode;
    if (parseInt($(this).val().indexOf(".")) > 0 && charCode == 46)
        return false;
    if ((charCode != 46 || $(element).val().indexOf('.') != -1)      // “.” CHECK DOT, AND ONLY ONE.
        (charCode < 48 || charCode > 57))
        return false;
})

/* Start Percentage up to 100 */
$('.Percentage').keyup(function () {
    if ($(this).val() > 100) {
        //alert("No numbers above 100");
        $(this).val('100');
    }
});
/*END Percentage up to 100 */


/* Start Height up to 7 Feet */
$('.Heightmax').keyup(function () {
    if ($(this).val() > 7) {
        //alert("No numbers above 100");
        $(this).val('7');
    }
});
/*END Height up to 7 Feet */

/* Start Weight up to 200 KG */
$('.Weightmax').keyup(function () {
    if ($(this).val() > 200) {
        //alert("No numbers above 100");
        $(this).val('200');
    }
});
/*END Weight up to 200 KG */
//$('.decimal').keyup(function () {
//    var val = $(this).val();
//    if (isNaN(val)) {
//        val = val.replace(/[^0-9\.]/g, '');
//        if (val.split('.').length > 2)
//            val = val.replace(/\.+$/, "");
//    }
//    $(this).val(val);
//});
function IsDecimal(key) {
    var specialKeys = new Array();
    specialKeys.push(8); //Backspace
    specialKeys.push(9);
    //getting key code of pressed key
    var keycode = (key.which) ? key.which : key.keyCode;
    if (keycode == 9)
    { }
    else if (!(keycode == 8 || keycode == 46) && (keycode < 48 || keycode > 57)) {
        return false;
    }
}
function IsValidDecimal(control, key) {
    var val = control.value;
    var code = key.keyCode || key.which;
    var specialKeys = new Array();
    specialKeys.push(8); //Backspace
    specialKeys.push(9);

    if (code == 46) {
        if (val.indexOf('.') > 0)
            return false;
    }

    var keycode = (key.which) ? key.which : key.keyCode;
    if (keycode == 9)
    { }
    else if (!(keycode == 8 || keycode == 46) && (keycode < 48 || keycode > 57)) {
        return false;
    }

    return true;
}

function IsDecimal100(control, key) {
    var specialKeys = new Array();
    specialKeys.push(8); //Backspace
    specialKeys.push(9);
    //getting key code of pressed key
    var keycode = (key.which) ? key.which : key.keyCode;
    if (control.value > 99) {
        control.value = "100";
        return false;
    }
    else if (keycode == 9) {

    }
    else if (!(keycode == 8 || keycode == 46) && (keycode < 48 || keycode > 57) || specialKeys.indexOf(keyCode) != -1) {
        return false;
    }
    return true;
}

function IsNumeric(key) {
    var specialKeys = new Array();
    specialKeys.push(8); //Backspace
    specialKeys.push(9);
    //getting key code of pressed key
    var keycode = (key.which) ? key.which : key.keyCode;
    if (keycode == 9)
    { }
    else if (!(keycode == 8 || keycode == 46) && (keycode < 48 || keycode > 57) || specialKeys.indexOf(keyCode) != -1) {
        return false;
    }
    return true;
}

function IsDigit(key) {
    var specialKeys = new Array();
    specialKeys.push(8); //Backspace
    specialKeys.push(9);
    var keycode = (key.which) ? key.which : key.keyCode;

    if ($.inArray(keycode, specialKeys) != -1) {
        return true;
    }
    else if (keycode < 48 || keycode > 57) {
        return false;
    }
    return true;
}


function Decimal2Digits(evt, element) {

    var controlKeys = [8, 9, 13];
    var isControlKey = controlKeys.join(",").match(new RegExp(event.which));
    //var specialKeys = new Array();
    //specialKeys.push(8); //Backspace
    //specialKeys.push(9);

    var charCode = (evt.which) ? evt.which : event.keyCode

    if (
        isControlKey ||     //Allow Special Charcter
        (charCode == 45 && $(element).val().indexOf('-') == -1 && $(element).val() == '') || //Allow Dash Only At First Position
        (charCode == 46 && $(element).val().indexOf('.') == -1)) //Allow Dot Only Once
    {
        return true;
    }

    if (charCode < 48 || charCode > 57) {
        return false;
    }

    if ($(element).val().indexOf('.') > 0) {
        splitval = $(element).val().split(".");
        if (splitval[1].length >= 2)
            return false;
        else
            return true;
    }

    return true;
}


function IsDigitAndDash(key) {
    var specialKeys = new Array();
    specialKeys.push(8); //Backspace
    specialKeys.push(9);
    specialKeys.push(45);
    //getting key code of pressed key


    var keycode = (key.which) ? key.which : key.keyCode;

    if (keycode == 45 || keycode == 109)
        return true;

    if (keycode == 9)
    { }
    else if ((keycode < 48 || keycode > 57) || specialKeys.indexOf(keyCode) != -1) {
        return false;
    }
    return true;
}

function IsDigitDashComma(key) {
    var specialKeys = new Array();
    specialKeys.push(8); //Backspace
    specialKeys.push(9);
    specialKeys.push(45);
    //getting key code of pressed key

    var keycode = (key.which) ? key.which : key.keyCode;

    if (keycode == 45 || keycode == 44)
        return true;

    if (keycode == 9)
    { }
    else if ((keycode < 48 || keycode > 57) || specialKeys.indexOf(keyCode) != -1) {
        return false;
    }
    return true;
}



$(".Required").on("blur keypress", function () {
    if ($(this).val() == "") {
        $(this).css("border", "1px solid #e26a73");
        // $(this).focus();
    }
    else {
        $(this).css("border", "1px solid #e5e5e5");
    }
});

/* Start Prevent From Copy Paste*/

$(document).ready(function () {
    $('.nopaste').bind('copy paste cut', function (e) {
        e.preventDefault(); //disable cut,copy,paste        
    });
});

/* End Prevent From Copy Paste*/


$('.TitleCase').keyup(function () {
    $(this).val(toTitleCase($(this).val()));
});

function toTitleCase(str) {
    return str.replace(/(?:^|\s)\w/g, function (match) {
        return match.toUpperCase();
    });
}


function DisplayNameFormat(FirstName, LastName, MiddleName, Format) {

    var Name = '';

    if (Format == "LFM") {
        if (LastName.trim() != '')
            Name += LastName.trim() + " ";
        if (FirstName.trim() != '')
            Name += FirstName.trim() + " ";
        if (MiddleName.trim() != '')
            Name += MiddleName.trim() + " ";
    }
    else if (Format == "FLM") {
        if (FirstName.trim() != '')
            Name += FirstName.trim() + " ";
        if (LastName.trim() != '')
            Name += LastName.trim() + " ";
        if (MiddleName.trim() != '')
            Name += MiddleName.trim() + " ";
    }
    else if (Format == "FML") {
        if (FirstName.trim() != '')
            Name += FirstName.trim() + " ";
        if (MiddleName.trim() != '')
            Name += MiddleName.trim() + " ";
        if (LastName.trim() != '')
            Name += LastName.trim() + " ";
    }
    else if (Format == "MFL") {
        if (MiddleName.trim() != '')
            Name += MiddleName.trim() + " ";
        if (FirstName.trim() != '')
            Name += FirstName.trim() + " ";
        if (LastName.trim() != '')
            Name += LastName.trim() + " ";
    }
    else if (Format == "LMF") {
        if (LastName.trim() != '')
            Name += LastName.trim() + " ";
        if (MiddleName.trim() != '')
            Name += MiddleName.trim() + " ";
        if (FirstName.trim() != '')
            Name += FirstName.trim() + " ";
    }
    else if (Format == "MLF") {
        if (MiddleName.trim() != '')
            Name += MiddleName.trim() + " ";
        if (LastName.trim() != '')
            Name += LastName.trim() + " ";
        if (FirstName.trim() != '')
            Name += FirstName.trim() + " ";
    }
    else if (Format == "FL") {
        if (FirstName.trim() != '')
            Name += FirstName.trim() + " ";
        if (LastName.trim() != '')
            Name += LastName.trim() + " ";
    }
    else if (Format == "F") {
        if (FirstName.trim() != '')
            Name += FirstName.trim() + " ";
    }
    else if (Format == "LF") {
        if (LastName.trim() != '')
            Name += LastName.trim() + " ";
        if (FirstName.trim() != '')
            Name += FirstName.trim() + " ";
    }

    return Name.trim().toUpperCase();
}


//var initPickers = function () {
//    //init date pickers
//    $('.date-picker').datepicker({
//        rtl: Metronic.isRTL(),
//        autoclose: true,
//        todayHighlight: true,
//        startDate: "01-01-1900"
//    });
//}
//initPickers();

function GetColumnIndex(ColumnName, TableID) {
    var SelectedIndex = -1;
    var ColumnIndex = 0;

    if ($('#' + TableID + ' tbody tr').length > 0) {
        $('#' + TableID + ' thead tr th').each(function () {
            if (this !== undefined) {
                if ($.trim(this.innerHTML).toString() == ColumnName.toString()) {
                    SelectedIndex = ColumnIndex;

                }
            }
            ColumnIndex++
        });
    }
    return SelectedIndex;
}


function FooterSection(ColumnName, OperationType, TableID) {

    var ColumnIndex = 0, SelectedIndex = 0, Total = 0, ColumnValue = 0, TotalRow = 0, Result = 0;
    TotalRow = $('#' + TableID + ' tbody tr').length;

    if (parseInt(TotalRow) > 0) {

        SelectedIndex = GetColumnIndex(ColumnName, TableID);
        $('#' + TableID + ' tbody tr').each(function () {
            if (!this.rowIndex) return;

            console.log(this.cells[SelectedIndex]);
            if (this.cells[SelectedIndex] != undefined) {
                if (this.cells[SelectedIndex].innerHTML != NaN)
                    ColumnValue = parseFloat(this.cells[SelectedIndex].innerHTML);

                Total = Total + ColumnValue;
            }
        });

        if (OperationType == "Sum")
            Result = Total;

        if (OperationType == "Avg") {
            var avg = parseFloat(Total) / parseFloat(TotalRow);
            Result = avg;
        }

        $('#' + TableID + ' tfoot tr').each(function () {
            this.cells[SelectedIndex].innerHTML = Result;
        });
    }
}


$(document).on('keypress', 'input', function (e) {
    if (e.keyCode == 13 && e.target.type !== 'submit') {
        var inputs = $(this).parents("form").eq(0).find(":input");
        var idx = inputs.index(this);

        if (idx == inputs.length - 1) {
            inputs[0].select()
        } else {
            inputs[idx + 1].focus(); //  handles submit buttons
            inputs[idx + 1].select();
        }
        return false;
    }
});


function GNWebKeyEvents(key, AddControlID, SearchControlID) {
    switch (key) {
        case 118:
            $("#" + SearchControlID).click();
            return false;
        case 119:
            $(".First").focus();
            return false;
        case 120:
            var href = $("#" + AddControlID).attr('href');
            window.location.replace(href);
            return false;
        default:
            //alert(key.toString())
            return true;
    }
}


/* Practical Exam */

function IsValidPracticalMarks(event, control, PassingMarks, MaxMarks) {
    if (control.value == "") {
        //alert("Enter Marks");
        control.focus;

        return false;
    }
    else if (control.value < PassingMarks) {
        if (!confirm("Are you sure want to enter marks less than passing marks"))
            control.focus();
    }
    else if (control.value > MaxMarks) {
        alert("Enter less than " + MaxMarks);
        control.focus();
        return false;
    }
    else {
        return true;
    }
}

function IsValidISBNISSN(e, type, control) {
    alert(type.val());
}

$('a.modalButton').on('click', function (e) {
    var src = $(this).attr('href');
    var target = $(this).attr('data-target');
    $(target + " iframe").attr({
        'src': src
    });
    e.preventDefault();
});

$('.modal').on('hidden.bs.modal', function () {
    $(".modal iframe").attr({
        'src': 'about:blank'
    });
});

function closemyModal() {
    $('.modal').modal('hide');
}

function closeModalAndRefreshPage() {
    $('.modal').modal('hide');
    location.reload();
}


function ShowHelp() {
    $(".DivHelp").slideToggle('slow');
}

var th = ['', 'Thousand', 'Million', 'Billion', 'Trillion'];

var dg = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

var tn = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];

var tw = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

function toWords(s) {
    s = s.toString();
    s = s.replace(/[\, ]/g, '');
    if (s != parseFloat(s)) return '';
    var x = s.indexOf('.');
    if (x == -1) x = s.length;
    if (x > 15) return 'too big';
    var n = s.split('');
    var str = '';
    var sk = 0;
    for (var i = 0; i < x; i++) {
        if ((x - i) % 3 == 2) {
            if (n[i] == '1') {
                str += tn[Number(n[i + 1])] + ' ';
                i++;
                sk = 1;
            } else if (n[i] != 0) {
                str += tw[n[i] - 2] + ' ';
                sk = 1;
            }
        } else if (n[i] != 0) {
            str += dg[n[i]] + ' ';
            if ((x - i) % 3 == 0) str += 'Hundred ';
            sk = 1;
        }
        if ((x - i) % 3 == 1) {
            if (sk) str += th[(x - i - 1) / 3] + ' ';
            sk = 0;
        }
    }
    //if (x != s.length) {
    //    var y = s.length;
    //    str += 'point ';
    //    for (var i = x + 1; i < y; i++) str += dg[n[i]] + ' ';
    //}
    var strAfterPoint = '';
    var skAfterPoint = 0;
    if (x != s.length) {
        var y = s.length;
        strAfterPoint += 'point ';
        for (var i = x + 1; i < y; i++) {
            if ((y - i) % 3 == 2) {
                if (n[i] == '1') {
                    strAfterPoint += tn[Number(n[i + 1])] + ' ';
                    i++;
                    skAfterPoint = 1;
                } else if (n[i] != 0) {
                    strAfterPoint += tw[n[i] - 2] + ' ';
                    skAfterPoint = 1;
                }
            } else if (n[i] != 0) {
                strAfterPoint += dg[n[i]] + ' ';
                if ((y - i) % 3 == 0) strAfterPoint += 'Hundred ';
                skAfterPoint = 1;
            }
            if ((y - i) % 3 == 1) {
                if (skAfterPoint) strAfterPoint += th[(y - i - 1) / 3] + ' ';
                skAfterPoint = 0;
            }
        }
    }
    str = str + strAfterPoint;
    return str.replace(/\s+/g, ' ');
}


function convertToWord(srcID, destID, CountryName) {
    var src = $("#" + srcID).val().trim();
    if (CountryName == "India") {
        var amtInWord = toWordsForIndia(src);
    }
    else {
        var amtInWord = toWords(src);
    }
    if (amtInWord.length > 50) {
        $('#' + destID).attr('title', amtInWord);
        amtInWord = amtInWord.substring(0, 50) + '...';
        $('#' + destID).html(amtInWord + '<br/>');
    }
    else {
        $('#' + destID).html(amtInWord + '<br/>');
    }

    if (amtInWord == '')
        $('#' + destID).attr('style', 'display: none;')
    else
        $('#' + destID).attr('style', 'display: block;')
}
// ----------------------- Add convert to word function for india---------------------------------------------
function toWordsForIndia(number) {

    var ones = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    var teens = ["", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    var tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    var splitters = ["", "", "Hundred", "Thousand", "", "Lakh", "", "Crore", "", "Arab", "", "Kharab", "", "Neel", "", "Padam", "", "Shankh"];
    number = number.toString();
    number = number.replace(/[\, ]/g, '');
    var str_number = number.toString();
    var start_len = str_number.length;
    var words = "";
    var suffix_index = 3;
    while (str_number.length > 0) {
        if (str_number.length == start_len) {
            var sliced = str_number.slice(-3);
        }
        else {
            var sliced = str_number.slice(-2);
            var suffix = splitters[suffix_index];
            suffix_index += 2;
        }
        words = convert_segment(sliced, suffix) + words;
        str_number = str_number.substr(0, str_number.length - sliced.length);
    }

    function convert_segment(segment, suffix) {
        var segment_str = "";
        var count = 0;
        while (segment.length > 0) {
            var val = segment.slice(-1);
            if (parseInt(val) > 0) {
                switch (count) {
                    case 0:
                        segment_str = ones[val];
                        break;
                    case 1:
                        if (val == "1" && segment_str) {
                            segment_str = teens[ones.indexOf(segment_str)];
                        } else {
                            segment_str = tens[val] + " " + segment_str;
                        }
                        break;
                    case 2:
                        segment_str = ones[val] + " " + splitters[count] + " " + segment_str;
                        break;
                    default:
                        console.log("no match found");
                }
            }
            count++;
            segment = segment.substr(0, segment.length - 1);
        }
        segment_str = segment_str.replace(/\s+$/, "")
        if (segment_str.length == 0) {
            return "";
        } else {
            return segment_str + " " + (suffix || "") + " ";
        }
    }

    return words.replace(/\s+$/, "");
}
