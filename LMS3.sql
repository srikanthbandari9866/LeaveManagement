
create database LMS3

use LMS3

create table Employee(
EmpId int primary key identity(1,1),
EmpName varchar(25) not null,
EmpUname varchar(20) not null,
EmpPass varchar(10)  not null,
EmpEmail varchar(25) not null,
EmpAddress varchar(50) not null,
EmpPhone varchar(10) not  null,
ManagerId int ,
Designation varchar(20),
DateJoined date,
EmpSalary int,
LeaveBalance int,
ExtraLeave int,
Level int,
constraint fk_ManagerId Foreign key(ManagerId) References Employee(EmpId)
)
go

Create table Leave(
LeaveId int primary key identity(101,1),
LeaveType varchar(30) not null,
LeaveStatus varchar(20) default 'Pending',
LeaveReason varchar(40) not null,
EmpId int,
ManagerId int,
LeaveStartDate date,
LeaveEndDate date,
LeaveBalanace int,


);


select * from Employee

select * from leave
