import _ from 'lodash';

var app = _.template(
  `<div class="row">
      <div class="col-3" id="menuSection">
          <%=menu()%>
      </div>
      <div class="col-4" id="optionsSection">
          <%=options%>
      </div>
      <div class="col-5" id="cartSection">
          <%=cart%>
      </div>
  </div>
  <hr>
  <div class="row d-none" id="orderTotal">
    <div class="col-8"></div>
    <div class="col-4">
        <h5>Order Calories: <span id="totalOrderCalories"></span> Cal</h5>
        <h5>Order Price: <span id="totalOrderPrice"></span> ₮</h5>
        <button type="button" class="btn btn-secondary" id="placeOrder">Make Order</button>
    </div>
  </div>
  <div class="modal-backdrop" style="opacity: 0.5" id="backdrop"></div>
  <div class="modal" id="messageModal">        
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Thank You!</h5>
                </div>
                <div class="modal-body">
                    <p>Please Wait. We Are Processing Your Order.</p>
                </div>
            </div>
        </div>
  </div>`
);
export default app;
