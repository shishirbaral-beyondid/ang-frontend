export interface UserCountDto {
     activeUserCount?:Number;
     
     provisionedUserCount?: Number;
     stagedUserCount?: Number;
     suspendedUserCount?: Number;
     passwordExpireUserCount?: Number;
}