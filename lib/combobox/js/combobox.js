$(document).ready(function() {
    $("body").on("click",".combobox button", btnComboboxOnClick);
    $("body").on("click",".combobox .combobox__item", btnComboboxItemOnSelect);
})

function btnComboboxOnClick() {
    $(this.nextElementSibling).toggle();
}

function btnComboboxItemOnSelect() {
    // Lấy ra text và value vừa chọn
    debugger
        const text = this.textContent;
    // Binding text lên input
       let parentElement= this.parentElement;
       let input = $(parentElement).siblings("input");
        $(input).val(text);
        $(parentElement).hide();
    // Lưu lại value vừa chọn
}