import _ from 'lodash';

var app = _.template(
    `<div class="row">
        <div class="col-5">
            <%-menu%>
        </div>
        <div class="col-4">
            <%-options%>
        </div>
        <div class="col-3">
            <%-cart%>
        </div>
    </div>`
);
export default app;
