import _ from 'lodash';

var app = _.template(
  `<div class="row">
      <div class="col-3" id="menuSection">
          <%=menu()%>
      </div>
      <div class="col-5" id="optionsSection">
          <%=options%>
      </div>
      <div class="col-4" id="cartSection">
          <%=cart%>
      </div>
  </div>`
);
export default app;
