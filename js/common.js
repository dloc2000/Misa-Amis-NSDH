var common = {
  /**
   * Hiển thị cảnh báo
   * @param {Array} -  msgErrors Mảng các thông báo hiển thị
   * Author: Locdx 06/09/2022
   */
  showErrorDialog(msgErrors) {
    try {
      // Khai báo html của dialog:
      let dlgHTML = $(`<div id="dlgDialog1" class="dialog">
                                <div class="dialog__content">
                                    <div id="btnClose1" class="dialog__button--close"></div>
                                    <div class="dialog__header title">Thông báo</div>
                                    <div class="dialog__body">
                                       
                                    </div>
                                    <div class="dialog__footer">
                                        <button id="btnOk" class="button1">Đồng ý</button>
                                    </div>
                                </div>
                            </div>
                            `);
      // Đẩy nội dung từ mảng vào trong dlgHTML
      var dlgBody = dlgHTML.find(".dialog__body");
      // debugger
      // console.log(dlgBody);
      // console.log(dlgHTML);
      if (msgErrors) {
        for (const msgError of msgErrors) {
          let textHTML = `<div>-${msgError}</div>`;
          dlgBody.append(textHTML);
        }
      }
      // Hiển thị dialog
      $("body").append(dlgHTML);
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * Hiển thị cảnh báo xóa
   * @param {any} -  msgDelete thông báo hiển thị
   * Author: Locdx 06/09/2022
   */
  showDeleteDialog() {
    try {
      // Khai báo html của dialog:
      let dlgHTML = $(`<div id="dialogDel" class="dialog">
                            <div class="dialog__msg-box">
                                <div class="msg-content">
                                    <div class="m__icon-warning"></div>
                                    <div class="msg__content" style="margin-right: 20px;">Bạn có thực sự muốn xóa Nhân viên không?</div>
                                </div>
                                <div class="footer">
                                    <button class="button2" style="width: 75px" id="btnCancel">Không</button>
                                    <button class="button1"style="min-width: 50px !important" id="confirmDelete">Có</button>
                                </div>
                            </div>
                        </div>
                            `);
      // Hiển thị dialog
      $("body").append(dlgHTML);
    } catch (error) {
      console.log(error);
    }
  },
   /**
   * Hiển thị dialog xác nhận thêm mới
   * @param {any} -  dialog thông báo hiển thị
   * Author: Locdx 07/09/2022
   */
  showConfirmDialog() {
    try {
      // Khai báo html của dialog:
      let dlgHTML = $(`<div id="dialogConfirm" class="dialog">
      <div class="dialog__msg-box">
          <div class="msg-content">
              <div class="m__icon-question"></div>
              <div class="msg__content" style="margin-right: 20px;">${MISAResource.MessageDialog.confirm[languageCode]}</div>
          </div>
          <div class="footer">
              <button class="button2" style="width: 75px" id="btnCancel">Không</button>
              <button class="button1"style="min-width: 50px !important" id="confirmUpdate">Có</button>
          </div>
      </div>
  </div>
      `);
      // Hiển thị dialog
      $("body").append(dlgHTML);
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * Hiển thị toast message khi xóa thành công
   * @param {any} -  toast thông báo hiển thị
   * Author: Locdx 07/09/2022
   */
  showToastMessage: {
    success: function (text){
      try {
        let toastHTML = `
        <div class="toast active">
                <div class="toast__message-dialog">
                    <div class="toast__message-left">
                        <div class="toast__icon m__icon-success"></div>
                        <div class="toast__title">${text} nhân viên thành công</div>
                    </div>
                    <div class="toast__message-right">
                        <div class="toast__close toast__success m__icon-close"></div>
                    </div>
                    <div class="progress active"></div>
                </div>
            </div>` ;
      
        $('body').append(toastHTML);
        setTimeout(() => {
          $(".toast").removeClass("active"); 
          $(".progress").removeClass("active");
          },3000)
      } catch (error) {
        console.log(error);
      }
    },
    error: function () {},
    warning: function () {},
  },

  /**
   * Định dạng ngày tháng năm sinh
   * @param {any} -  ngày tháng
   * Author: Locdx 06/09/2022
   */
  formatDate(date) {
    try {
      if (date) {
        date = new Date(date);
        // Lấy ra ngày , ngày < 10 sẽ có dạng 01,02,...
        let day = date.getDay();
        day = day < 10 ? `0${day}` : day;
        // Lấy ra tháng , tháng < 10 sẽ có dạng 01,02,...
        let month = date.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
        // Lấy ra năm
        let year = date.getYear();
        return `${day}/${month}/${year}`;
      } else {
        return " ";
      }
    } catch (error) {
      console.log(error);
    }
  },

  /**
   * Định dạng tiền lương
   * @param {number} -  Tiền lươnh
   * Author: Locdx 06/09/2022
   */
  formatMoneyVND(money) {
    try {
      if (money) {
        money = new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "VND",
        }).format(money);
        return money;
      } else {
        return " ";
      }
    } catch (error) {
      console.log(error);
    }
  },
};

/**
 * Gán sự kiện validate cho các input bắt buộc nhập
 * Author: Locdx 06/09/2022
 */
$("input[empty-value]").blur(function () {
  let value = $(this).val();
  if (!value) {
    $(this).addClass("input--error");
  } else {
    $(this).removeClass("input--error");
  }
});
