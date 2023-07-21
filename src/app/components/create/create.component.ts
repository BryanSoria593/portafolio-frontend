import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService,UploadService]
})
export class CreateComponent implements OnInit {

  public title: string="";
  public project!: Project;
  public save_project!: any;

  public status: string="";
  public filesToUpload!: Array<File>;
  public url : string="";

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,

  ) { 
    this.title = 'Crear proyecto';
    this.url = Global.url;
    this.project = new Project('','','','',new Date().getUTCFullYear() ,'','');
  }

  ngOnInit(): void {
  }
  onSubmit(form: any){

    this._projectService.saveProject(this.project).subscribe(
      response => {
        
        if(response.project){     
          if(this.filesToUpload){
            this._uploadService.makeFileRequest( Global.url+'upload-image/'+response.project._id,[],this.filesToUpload,'image' )
            .then((result:any)=>{
              this.save_project = response.project;
  
              this.status = 'success';
              
              form.reset();
            })

          }else{
            this.save_project = response.project;
  
            this.status = 'success';
            
            form.reset();
          }
          
        }else{
          this.status = "failed";
        }
      },
      error => {
        console.log(error);
      }
    )
  }
  fileChangeEvent(fileInput:any){
    
    this.filesToUpload = <Array<File>>fileInput.target.files;
    

  }
}
