$(document).ready(function () {
  initEvent();
});

/**
 * Tạo các events cho các elements
 * Author: Locdx 05/09/2022
 */
function initEvent() {
  // 1. Hiện form khi nhấn nút thêm
  $("#btnAdd").click(function () {
    $("#formEmployee").show();
    // Focus vào ô nhập liệu đầu tiên
    $("#txtEmployeeCode").focus();
  });
  // 2. Ẩn form khi click nút close
  $(".form__popup-close .btn-close").click(function () {
    $("#formEmployee").hide();
  });

  // 3. Phím tắt cho form
  $("#formEmployee").keydown(function (e) {
    // Bắt hành động khi người dùng nhấn enter:
    try {
        const keyCode = e.keyCode;
        if (keyCode == MisaEnum.KeyCode.ENTER) {
            $("#btnSaveAdd").trigger("click");
        } else if (keyCode == MisaEnum.KeyCode.ESC) {
            $("#formEmployee").hide();
        }
    } catch (error) {
      console.log(error);
    }
  });

  //
//   $("body").bind("keydown", "l", function () {
//         $("#formEmployee").show();
//   });
}
