$(document).ready(function () {
  // Các hàm gán event cho các elements:
  initEvent();
  loadData();
});
let languageCode = "VI";
const url = "https://cukcuk.manhnv.net/api/v1/Employees";
/**
 * Load dữ liệu từ API
 * Author: Locdx 06/09/2022
 */
function loadData() { 
    try {
      // Call API thực hiện lấy data cho table:
        fetch(url, {method: "GET"})
            .then(res => res.json())
            .then(res => {
                // Xử lý và clear dữ liệu cũ:
                $("table#tbEmployeeList tbody").empty();
                let ths = $("table#tbEmployeeList thead th");
                for (const emp of res) {
                      var trHTML = $(`<tr></tr>`)
                    for (const th of ths) {
                        // lấy ra prop-name
                        let propName = $(th).attr("prop-name");
                        if(propName === "checkbox") {
                            trHTML.append(`<td><input type="checkbox"></td>`);
                        } else if(propName === "fix") {
                            trHTML.append(`<td>
                              <div class="group__title-combobox">
                                <div class="title">Sửa</div>
                                <div class="combobox">
                                  <button class="m-icon"><div class="m-arrow-dropdown-blue"></div></button>
                                  <div class="combobox__data-under" hidden>
                                      <div class="combobox__item" value="0">Nhân bản</div>
                                      <div class="combobox__item" value="1">Xóa</div>
                                      <div class="combobox__item"  value="2">Ngưng sử dụng</div>
                                  </div>
                                </div>
                              </div>
                            </td>`);
                        } else {
                          // Lấy ra thông tin employee
                          let value = emp[propName];
                          // Định dạng ngày sinh
                          const formatDate = th.hasAttribute("format-date");
                          if(formatDate) {
                            value = common.formatDate(value);
                          }
                          let td = `<td>${value || ""}</td>`
                          trHTML.append(td);
                        }
                    }
                    // binding dữ liệu vào bảng
                    $("table#tbEmployeeList tbody").append(trHTML)
                }

                // Lấy thông tin các cột dữ liệu của bảng


                console.log("load data");


            })
    } catch (error) {
      console.log(error);
    }
    
 }

 /**
 * Thực hiện cất dữ liệu
 * Author: Locdx 06/09/2022
 */
function saveData() {
  try {
      // Validate dữ liệu
      // 1. Các thông tin bắt buộc nhập (*).
          const employeeCode = $("#txtEmployeeCode").val();
          const fullName = $("#txtFullName").val();
          const position = $("#txtPosition").val();
          const birthday = $("#txtBirthday").val();

        let msgErrors = [];
      // Cảnh báo text theo ngôn ngữ chọn
        if (!employeeCode) {
            msgErrors.push(MISAResource.ErrorValidate.EmployeeCodeNotEmpty[languageCode]);
        }
        if (!fullName) {
            msgErrors.push(MISAResource.ErrorValidate.FullNameNotEmpty[languageCode])
        }
        if (!position) {
            msgErrors.push(MISAResource.ErrorValidate.PositionNotEmpty[languageCode])
        }
        if (!birthday) {
            msgErrors.push(MISAResource.ErrorValidate.BirthdayNotEmpty[languageCode])
        }
      // 2. Các thông tin cần yêu cầu đúng định dạng (Email)

      // 3. Các thông tin liên quan đến ngày tháng:

      // Nếu có dữ liệu validate không hợp lệ , hiển thị cảnh báo
        if(msgErrors.length > 0 ) {
          common.showErrorDialog(msgErrors);
        }
        
      // Call API thực hiện cất dữ liệu
      //  1. Build Object Employee
        let inputs = $('#formBody input');
        const employee = {};
        for (const input of inputs) {
            let propName = $(input).attr("prop-name");
            let value = $(input).val();
            if(value) {
              employee[propName] = value;
            }
        }
        // POST Data
        $.ajax({
          type: "POST",
          url: url,
          data: JSON.stringify(employee),
          dataType: "json",
          contentType: "application/json",
          success: function (response) {
              alert("Them moi thanh cong");
              $("#formEmployee").hide();
          },
          error: function() {
            console.log("loi roi")
          }
        });
  } catch (error) {
    console.log(error);
  }
}















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
  $("html").on("click",".form__popup-close .btn-close",function () {
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
  // 4. Cất dữ liệu khi nhán button Cất và thêm :
   $("html").on("click","#btnSaveAdd", saveData);

  // Reload dữ liệu page
   $("#btnReload").click(function () { 
          loadData();
});
// 5.
// ẩn dialog validate khi ấn btn đồng ý
  $('html').on("click","#btnOk", function () {
    $(this).parents(".dialog").hide();
  });


}
