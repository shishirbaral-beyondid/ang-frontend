/*!
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  okta:{
    oidc: {
        orgUrl:'https://dev-837622.oktapreview.com',
     
        clientId: '0oafwmdcvpCZ3dqtq0h7',
  
        issuer: 'https://dev-837622.oktapreview.com/oauth2/default',
   
        redirectUri: 'http://localhost:8080/login',
  
        scope: 'openid profile email'
    },
    
    resourceServer: {
      url: 'http://localhost:8000/api/v1/',
    }
   
  },
  
};

export const userProfileList :OktaUserProfile[] =[
                                   
                                   {
                                     displayName:'Username',
                                     variableName:'login',
                                     dataType:'String',
                                     validation:{
                                       required:true,
                                       minLength:5,
                                       maxLength:100
                                     }
                                   },
                                   {
                                    displayName:'First Name',
                                    variableName:'firstName',
                                    dataType:'String',
                                    validation:{
                                      required:true,
                                      minLength:5,
                                      maxLength:50
                                    }
                                  },
                                  {
                                    displayName:'Last Name',
                                    variableName:'lastName',
                                    dataType:'String',
                                    validation:{
                                      required:true,
                                      minLength:1,
                                      maxLength:50
                                    }
                            
                                  },{
                                    displayName:'Middle Name',
                                    variableName:'middleName',
                                    dataType:'String',
                                    validation:{
                                      required:false
                                    }
                                    },{
                                      displayName:'Honorific prefix',
                                      variableName:'honorificPrefix',
                                      dataType:'String',
                                      validation:{
                                        required:false
                                        
                                      }
                                      },{
                                        displayName:'Honorific suffix',
                                        variableName:'honorificSuffix',
                                        dataType:'String',
                                        validation:{
                                          required:false
                                        }
                                          
                                        },{
                                          displayName:'Primary Email',
                                          variableName:'email',
                                          dataType:'String',
                                          validation:{
                                            required:true
                                           
                                          }
                                        },{
                                          displayName:'Title',
                                          variableName:'title',
                                          dataType:'String',
                                          validation:{
                                            required:false
                                           
                                          }
                                        },{
                                          displayName:'Display name',
                                          variableName:'displayName',
                                          dataType:'String',
                                          validation:{
                                            required:false
                                           
                                          }
                                        },{
                                          displayName:'Nick Name',
                                          variableName:'nickName',
                                          dataType:'String',
                                          validation:{
                                            required:false
                                           
                                          }
                                        }
                                        ,{
                                          displayName:'Profile Url',
                                          variableName:'profileUrl',
                                          dataType:'String',
                                          validation:{
                                            required:false
                                           
                                          }
                                        },{
                                          displayName:'Secondary email',
                                          variableName:'secondaryEmail',
                                          dataType:'String',
                                          validation:{
                                            required:false
                                           
                                          }
                                        },{
                                          displayName:'Mobile Phone',
                                          variableName:'mobilePhone',
                                          dataType:'String',
                                          validation:{
                                            required:false
                                           
                                          }

                                        },{
                                          displayName:'Primary phone',
                                          variableName:'primaryPhone',
                                          dataType:'String',
                                          validation:{
                                            required:false,
                                            maxLength:100
                                           
                                          }
                                        },{
                                          displayName:'Profile Url',
                                          variableName:'profileUrl',
                                          dataType:'String',
                                          validation:{
                                            required:false
                                           
                                          }
                                        },{
                                          displayName:'Street address',
                                          variableName:'streetAddress',
                                          dataType:'String',
                                          validation:{
                                            required:false
                                           
                                          }
                                        },{
                                          displayName:'City',
                                          variableName:'city',
                                          dataType:'String',
                                          validation:{
                                            required:false
                                           
                                          }
                                        },{
                                          displayName:'Zip code',
                                          variableName:'zipCode',
                                          dataType:'String',
                                          validation:{
                                            required:false
                                           
                                          }
                                        },{
                                          displayName:'Postal Address',
                                          variableName:'postalAddress',
                                          dataType:'String',
                                          validation:{
                                            required:false
                                           
                                          }
                                        },{
                                          displayName:'State',
                                          variableName:'state',
                                          dataType:'String',
                                          validation:{
                                            required:false
                                           
                                          }
                                        },{
                                          displayName:'Country Code',
                                          variableName:'countryCode',
                                          dataType:'String',
                                          validation:{
                                            required:false
                                           
                                          }
                                        },{
                                          displayName:'Preferred language',
                                          variableName:'preferredLanguage',
                                          dataType:'String',
                                          validation:{
                                            required:false
                                           
                                          }
                                        },{
                                          displayName:'Locale',
                                          variableName:'locale',
                                          dataType:'String',
                                          validation:{
                                            required:false
                                           
                                          }
                                        },{
                                          displayName:'Time Zone',
                                          variableName:'timezone',
                                          dataType:'String',
                                          validation:{
                                            required:false
                                           
                                          }
                                        },{
                                          displayName:'User type',
                                          variableName:'userType',
                                          dataType:'String',
                                          validation:{
                                            required:false
                                           
                                          }
                                        },{
                                          displayName:'Employee Number',
                                          variableName:'employeeNumber',
                                          dataType:'String',
                                          validation:{
                                            required:false
                                           
                                          }
                                        },{
                                          displayName:'Cost center',
                                          variableName:'costCenter',
                                          dataType:'String',
                                          validation:{
                                            required:false
                                           
                                          }
                                        },{
                                          displayName:'Organization',
                                          variableName:'organization',
                                          dataType:'String',
                                          validation:{
                                            required:false
                                           
                                          }
                                        },{
                                          displayName:'Division',
                                          variableName:'division',
                                          dataType:'String',
                                          validation:{
                                            required:false
                                           
                                          }
                                        },{
                                          displayName:'Department',
                                          variableName:'department',
                                          dataType:'String',
                                          validation:{
                                            required:false
                                           
                                          }
                                        },{
                                          displayName:'ManagerId',
                                          variableName:'managerId',
                                          dataType:'String',
                                          validation:{
                                            required:false
                                           
                                          }
                                        },{
                                          displayName:'Manager',
                                          variableName:'manager',
                                          dataType:'String',
                                          validation:{
                                            required:false
                                           
                                          }
                                        },
                                        {
                                          displayName:'IntArr',
                                          variableName:'IntergerArray',
                                          dataType:'Array',
                                          validation:{
                                            required:false
                                           
                                          }
                                        }  ,
                                        {
                                          displayName:'samplebool',
                                          variableName:'samplebool',
                                          dataType:'Select',
                                          options:[{
                                            key:'true',
                                            value:'true',
                                          },{
                                            key:'false',
                                            value:'false',
                                          }],
                                          validation:{
                                            required:false
                                           
                                          }
                                        }  
                                      ]




export interface OktaUserProfile {
    displayName?:string;
    variableName?:string;
    dataType?:string;
    options?:[
      {
        key?:string;
        value?:string;
      }
    ];
    validation?:{
      required?:boolean;
      minLength?:number;
      maxLength?:number;
    }




}
