///**
// * Created by WeiChen on 2016/1/28.
// */
//import React from 'react';
//import DropzoneComponent from 'react-dropzone-component';
//export default class Dropzone extends React.Component{
//    componentConfig = {
//        iconFiletypes: ['.jpg', '.png', '.gif'],
//        showFiletypeIcon: true,
//        postUrl: '/uploadHandler'
//    };
//    djsConfig = {
//        addRemoveLinks: true,
//        acceptedFiles: "image/jpeg,image/png,image/gif"
//    };
//    simpleCallBack = function () {
//        console.log('I\'m a simple callback');
//    };
//    callbackArray = [
//        function () {
//            console.log('Look Ma, I\'m a callback in an array!');
//        },
//        function () {
//            console.log('Wooooow!');
//        }
//    ];
//    eventHandlers = {
//        // All of these receive the event as first parameter:
//        drop: this.callbackArray,
//        dragstart: null,
//        dragend: null,
//        dragenter: null,
//        dragover: null,
//        dragleave: null,
//        // All of these receive the file as first parameter:
//        addedfile: this.simpleCallBack,
//        removedfile: null,
//        thumbnail: null,
//        error: null,
//        processing: null,
//        uploadprogress: null,
//        sending: null,
//        success: null,
//        complete: null,
//        canceled: null,
//        maxfilesreached: null,
//        maxfilesexceeded: null,
//        // All of these receive a list of files as first parameter
//        // and are only called if the uploadMultiple option
//        // in djsConfig is true:
//        processingmultiple: null,
//        sendingmultiple: null,
//        successmultiple: null,
//        completemultiple: null,
//        canceledmultiple: null,
//        // Special Events
//        totaluploadprogress: null,
//        reset: null,
//        queuecompleted: null
//    };
//    render(){
//        return(
//            <DropzoneComponent config={this.componentConfig}
//                               eventHandlers={this.eventHandlers}
//                               djsConfig={this.djsConfig} >
//                <div>Try dropping some files here, or click to select files to upload.</div>
//            </DropzoneComponent>
//        )
//    }
//}