<template>
  <div class="card card-custom Detailing p-7 mt-3">
    <div class="Detailing-card-3">
      <div class="Detailing-card-3_1">
        <h4 class="text-center">Documentação deste Robô</h4>
        <span>SearchTravel</span>
        <div class="file_upload">
          <div class="input-group input-group-sm">
            <div class="input-group-prepend">
              <button class="btn">get</button>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Small size"
              aria-describedby="basic-addon2"
            />
          </div>
        </div>
        <span>Parameter</span><br />
        <label class="mt-5 ml-8"
          ><span
            >position <span class="text-muted">string</span
            ><span class="text-danger">(required)</span></span
          >
          <p>
            Job Title Name. Example: UX Design, Manager our Development
          </p> </label
        ><br />

        <label class="mt-5 ml-8"
          ><span
            >job_description<span class="text-muted">string</span
            ><span class="text-danger">(required)</span></span
          >
          <p>
            Job Title Name. Example: UX Design, Manager our Development
          </p> </label
        ><br />

        <label class="mt-5 ml-8"
          ><span>place <span class="text-muted">string</span></span>
          <p>Report job location. Ex: São Paulo, SP, Brazil</p> </label
        ><br />

        <label class="mt-5 ml-8"
          ><span>menssage <span class="text-muted">string</span></span>
          <p>
            Invitation message for user to participate in selection process.
          </p>
        </label>
      </div>

      <div class="Detailing-card-3_2">
        <span>Responses</span><br />
        <label class="mt-5 ml-8"
          ><span>200 - Success</span>
          <p>
            This is to let you know that your request was executed successfully.
          </p> </label
        ><br />

        <label class="mt-5 ml-8"
          ><span>401 - Unauthorized</span>
          <p>
            Your request was not authorized, this could be because of the
            following reasons:
          </p>
          <smallspan>- Your token is invalid</smallspan><br />
          <smallspan>- This API is not active</smallspan> </label
        ><br />

        <label class="mt-5 ml-8"
          ><span>403 - Forbidden</span>
          <p>
            Your request has been blocked, this could be because of the
            following reasons:
          </p>
          <smallspan>- Your API has been disabled</smallspan><br />
          <smallspan
            >- Your credit balance is insufficient for this query.</smallspan
          > </label
        ><br />
      </div>

      <div class="Detailing-card-3_3">
        <span>Testing</span><br />
        <div class="d-flex row">
          <div class="col-sm-6 col-12">
            <span
              >No formulário abaixo, você pode testar nossa API para ver o
              retorno de sua solicitação.</span
            >
            <slot></slot>
            <div class="Run-btn mb-10">
              <button class="btn btn-primary">RUN TEST</button>
            </div>
          </div>
          <div class="col-md-6 col-12">
            <div
              class="example-code  example-code-on"
              style="display: block;"
              kt-hidden-height="152"
            >
              <!-- 
                                           <ul class="example-nav nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-2x">
                                               <li class="nav-item">
                                                   <a class="nav-link active" data-toggle="tab" href="#example_code_3_html">HTML</a>
                                               </li>
                                               <li class="nav-item">
                                                   <a class="nav-link" data-toggle="tab" href="#example_code_3_js">JS</a>
                                               </li>
                                           </ul> -->
              <span
                class="example-copy"
                data-toggle="tooltip"
                title=""
                data-original-title="Copy code"
              ></span>
              <div class="tab-content">
                <div
                  class="tab-pane active"
                  id="example_code_3_html"
                  role="tabpanel"
                >
                  <div class="example-highlight">
                    <pre
                      style="height: 400px;"
                      class="language-html"
                    ><code>Hardik</code></pre>
                  </div>
                </div>
                <div class="tab-pane" id="example_code_3_js">
                  <div class="example-highlight">
                    <pre
                      style="height: 400px;"
                      class="language-js"
                    ><code>Hardik</code></pre>
                  </div>
                </div>
              </div>
              <!--end::Code example-->
            </div>
          </div>
        </div>
      </div>

      <div class="Detailing-card-3_4">
        <span>example</span><br />
        <div
          class="example-code  example-code-on"
          style="display: block;"
          kt-hidden-height="152"
        >
          <ul
            class="example-nav nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-2x"
          >
            <li class="nav-item">
              <a
                class="nav-link active"
                data-toggle="tab"
                href="#example_code_3_html"
                >HTML</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#example_code_3_css"
                >CSS</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#example_code_3_js"
                >JS</a
              >
            </li>
          </ul>
          <span
            class="example-copy"
            data-toggle="tooltip"
            title=""
            data-original-title="Copy code"
          ></span>
          <div class="tab-content">
            <div
              class="tab-pane active"
              id="example_code_3_html"
              role="tabpanel"
            >
              <div class="example-highlight">
                <pre
                  style="height: 400px;"
                  class="language-html"
                ><code>Hardik</code></pre>
              </div>
            </div>
            <div class="tab-pane" id="example_code_3_css">
              <div class="example-highlight">
                <pre
                  style="height: 400px;"
                  class="language-css"
                ><code>Hardik</code></pre>
              </div>
            </div>
            <div class="tab-pane" id="example_code_3_js">
              <div class="example-highlight">
                <pre
                  style="height: 400px;"
                  class="language-js"
                ><code>Hardik</code></pre>
              </div>
            </div>
          </div>
          <!--end::Code example-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
