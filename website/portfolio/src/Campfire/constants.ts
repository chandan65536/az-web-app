export const CONSTANTS = {

    helpTemplate : `<ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
        <button class="nav-link active" id="tutorial-tab" data-bs-toggle="tab" data-bs-target="#tutorial-tab-pane"
            type="button" role="tab" aria-controls="tutorial-tab-pane" aria-selected="true">Tutorial</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button"
            role="tab" aria-controls="profile-tab-pane" aria-selected="false">Profile</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="settings-tab" data-bs-toggle="tab" data-bs-target="#settings-tab-pane"
            type="button" role="tab" aria-controls="settings-tab-pane" aria-selected="false">Settings</button>
    </li>
</ul>
<div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="tutorial-tab-pane" role="tabpanel" aria-labelledby="tutorial-tab"
        tabindex="0" style="padding-top: 30px;">
        <div id="carouselExampleCaptions" class="carousel slide">
            {{!-- <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                    aria-label="Slide 4"></button>
            </div> --}}
            <div class="carousel-inner">
                <div class="container-fluid carousel-item active">
                    <div class="row">
                        <div class="col">
                            <img src="../assets/images/tutorial-0.jpeg" class="d-block w-100 rounded" alt="...">
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-sm-2">
                             <button class="btn btn-info" type="button" data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="prev">
                                <span aria-hidden="true">&#x1F880;</span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                        </div>
                        <div class="col-sm" style="text-align: center; padding-top: 15px;">
                            <h5>Campfire and Light (1/4)</h5>
                            <p>
                                You will see a campfire already lit on the game board.
                                Your task is to guide the light from this campfire to 
                                the second extinguished campfire.
                            </p>
                        </div>
                        <div class="col-sm-2" style="text-align: right;">
                            <button class="btn btn-info" type="button" data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="next">
                                <span class="" aria-hidden="true">&#x1F882;</span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="container-fluid carousel-item">
                    <div class="row">
                        <div class="col">
                            <img src="../assets/images/tutorial-1.jpeg" class="d-block w-100  rounded" alt="...">
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-sm-2">
                             <button class="btn btn-info" type="button" data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="prev">
                                <span aria-hidden="true">&#x1F880;</span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                        </div>
                        <div class="col-sm" style="text-align: center; padding-top: 15px;">
                            <h5>Using Diamonds (2/4)</h5>
                            <p>To direct the light, you will need diamonds.
                                Click on any diamond, and it will rotate clockwise.
                                You can click multiple times to get the desired orientation.
                            </p>
                        </div>
                        <div class="col-sm-2" style="text-align: right;">
                            <button class="btn btn-info" type="button" data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="next">
                                <span class="" aria-hidden="true">&#x1F882;</span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="container-fluid carousel-item">
                    <div class="row">
                        <div class="col">
                            <img src="../assets/images/tutorial-2.jpeg" class="d-block w-100 rounded" alt="...">
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-sm-2">
                             <button class="btn btn-info" type="button" data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="prev">
                                <span aria-hidden="true">&#x1F880;</span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                        </div>
                        <div class="col-sm" style="text-align: center; padding-top: 15px;">
                            <h5>Level Completion (3/4)</h5>
                            <p>
                                The level ends when the light reaches the extinguished campfire.
                            </p>
                        </div>
                        <div class="col-sm-2" style="text-align: right;">
                            <button class="btn btn-info" type="button" data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="next">
                                <span class="" aria-hidden="true">&#x1F882;</span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="container-fluid carousel-item">
                    <div class="row">
                        <div class="col">
                            <img src="../assets/images/tutorial-3.jpeg" class="d-block w-100 rounded" alt="...">
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-sm-2">
                             <button class="btn btn-info" type="button" data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="prev">
                                <span aria-hidden="true">&#x1F880;</span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                        </div>
                        <div class="col-sm" style="text-align: center;">
                            <h5>Changing View (4/4)</h5>
                            <p>
                                You can use your mouse to turn the view.
                                Simply click anywhere on the window and drag left or right.
                                The game world will rotate accordingly, giving you a fresh perspective.
                            </p>
                        </div>
                        <div class="col-sm-2" style="text-align: right;">
                            <button class="btn btn-info" type="button" data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="next">
                                <span class="" aria-hidden="true">&#x1F882;</span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {{!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button> --}}
        </div>
    </div>
    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
        <div class="container text-center">
            <div class="text-center" style="margin: 30px 0 30px 0;">
                <span>Player Name :</span>
                <div style="display: inline-block;">
                    <input style="display: inline-block;" type="text" id="game-setting--player-name"
                        class="form-control" value="{{playerName}}" />
                </div>
                <span style="display: inline-block; font-weight: bold; color: green; visibility: hidden;"
                    id="game-setting--player-name-save-success">&checkmark;</span>
                <button type="button" class="btn btn-secondary btn-sm game-action--button"
                    data-action="player-name-update">Update</button>
            </div>
            <div style="border: 1px solid green; border-radius: 5px; padding: 10px 10px;">
                <div style="padding-bottom: 5px;">
                    <span style="font-size: 1.25em;">&#10210; History &#10211;</span>
                </div>
                <div style="max-height: 300px; overflow-y:scroll; font-size:0.75em;">
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Gems</th>
                                <th scope="col">Path</th>
                                <th scope="col">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {{#each levelsCompleted}}
                            <tr>
                                <th scope="row">Level {{level}}</th>
                                <td>{{score.diamondsUsed}}</td>
                                <td>{{score.pathLength}}</td>
                                <td>{{ViewFriendlyTime}}</td>
                            </tr>
                            {{/each}}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="tab-pane fade" id="settings-tab-pane" role="tabpanel" aria-labelledby="settings-tab" tabindex="0">
        <div style="padding: 30px 5px 5px 5px;">
            <table class="table table-sm">
                <tbody>
                    <tr>
                        <th>Enable Shadows?</th>
                        <td>
                            <input class="form-check-input" type="checkbox" 
                                id="game-setting--enable-shadow-checkbox"
                                {{#if settings.enableShadows}} checked {{/if}}>
                        </td>
                        <td class="game-setting--shadow-config">Type:</td>
                        <td class="game-setting--shadow-config">
                            <select name="shadow-type" id="game-setting--shadow-type">
                                <option value="basic" {{#if (isEq 'basic' settings.shadowType)}} selected {{/if}}>Basic</option>
                                <option value="pcf" {{#if (isEq 'pcf' settings.shadowType)}} selected {{/if}}>PCF</option>
                                <option value="pcf-soft" {{#if (isEq 'pcf-soft' settings.shadowType)}} selected {{/if}}>PCF Soft</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>Enable Bloom?</th>
                        <td>
                            <input class="form-check-input" type="checkbox" 
                                id="game-setting--enable-bloom-checkbox"
                                {{#if settings.enableBloom}} checked {{/if}}>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <button type="button" id="game-button--apply-settings" class="btn btn-secondary game-action--button" data-action="apply-settings">Apply & Reload</button>
    </div>
</div>`,

    levelCompletelTemplate: `<div style="margin-bottom: 20px;">
    Congratulations! You completed level <span>{{currentLevel}}</span>.
</div>
<div class="border border-success" style="padding: 5px; margin: 5px; border-radius: 10px;">
    <table class="table table-sm">
        <tbody>
            <tr>
                <td style="text-wrap: nowrap;">Gems Used</td>
                <td>{{levelsCompleted.[0].score.diamondsUsed}}</td>
            </tr>
            <tr>
                <td style="text-wrap: nowrap;">Light path distance</td>
                <td>{{levelsCompleted.[0].score.pathLength}}</td>
            </tr>
            <tr>
                <td style="text-wrap: nowrap;">Completed On</td>
                <td>{{levelsCompleted.[0].completedOn}}</td>
            </tr>
        </tbody>
    </table>
</div>
<div class="text-center" style="margin: 30px 0 30px 0;">
    <span>Player Name :</span>
    <div style="display: inline-block;">
        <input style="display: inline-block;" type="text" id="game-setting--player-name" class="form-control" value="{{playerName}}"/>
    </div>
    <span style="display: inline-block; font-weight: bold; color: green; visibility: hidden;" id="game-setting--player-name-save-success">&checkmark;</span>
    <button type="button" class="btn btn-secondary btn-sm game-action--button" data-action="player-name-update">Update</button>
</div>
<div>
    {{#if isFinalLevel}}
    <div class="text-center">
        <div style="padding-bottom: 10px;">&#9885;&#9885;&#9885; THE END &#9885;&#9885;&#9885;</div>
        <div style="font-family: consolas; font-size:0.75em;">
            Thank you for embarking on this adventure! We hope you enjoyed every moment of it.
            If you had a blast, don't keep it to yourself! Share the game with your friends and spread the joy!
            Until next time, happy gaming!
        </div>
    </div>
    {{/if}}
</div>`,

    levelNavTemplate: `<a class="nav-link dropdown-toggle" href="#" 
    role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Level {{currentLevel}}
</a>
<ul class="dropdown-menu">
    {{#each allLevels}}
        <li>
            <a class="dropdown-item game-action--button {{#if isCurrentLevel}} border border-success {{/if}}" href="#" 
                {{#unless isCurrentLevel}} 
                    data-action="navigate-level" data-action-value="{{levelNum}}"
                {{/unless}}  

                {{#if isCurrentLevel}}
                    style="border-radius: 5px; font-weight: bold; font-style: italic;"
                {{/if}}  
                >
                Level {{levelNum}} {{#if isLastLevel}} final {{/if}}
            </a>
        </li>
    {{/each}}
</ul>`,

    fire_fragShader: `uniform sampler2D diffuseTexture;

varying vec2  _textureOffset;
varying vec2  _textureRepeat;

void main() {
  gl_FragColor = texture2D(diffuseTexture, (gl_PointCoord * _textureRepeat) + _textureOffset);
}`,
    fire_vertexShader: `uniform float pointMultiplier;

attribute vec2 textureOffset;
attribute vec2 textureRepeat;
attribute float pointSize;

varying vec2  _textureOffset;
varying vec2  _textureRepeat;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = pointSize * pointMultiplier / gl_Position.w;

  _textureOffset = textureOffset;
  _textureRepeat = textureRepeat;
}`,

    pick_fragShader: `uniform vec3 glowColor;
varying float intensity;
void main() 
{
	vec3 glow = glowColor * intensity;
    gl_FragColor = vec4( glow, 1.0 );
}`,
    pick_vertexShader: `uniform vec3 viewVector;
uniform float c;
uniform float p;
varying float intensity;
void main() 
{
    vec3 vNormal = normalize( normalMatrix * normal );
	vec3 vNormel = normalize( normalMatrix * viewVector );
	intensity = pow( c - dot(vNormal, vNormel), p );
	
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`
} as const;