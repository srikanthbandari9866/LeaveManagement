using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace LMS3.Models
{
    public partial class LMS3Context : DbContext
    {
        public LMS3Context()
        {
        }

        public LMS3Context(DbContextOptions<LMS3Context> options)
            : base(options)
        {
        }

        public virtual DbSet<Employee> Employee { get; set; }
        public virtual DbSet<Leave> Leave { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=SRI_SOFTECH\\SQLEXPRESS;database=LMS3;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>(entity =>
            {
                entity.HasKey(e => e.EmpId)
                    .HasName("PK__Employee__AF2DBB99E287C8F0");

                entity.Property(e => e.DateJoined).HasColumnType("date");

                entity.Property(e => e.Designation)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.EmpAddress)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EmpEmail)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.EmpName)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.EmpPass)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.EmpPhone)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.EmpUname)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Manager)
                    .WithMany(p => p.InverseManager)
                    .HasForeignKey(d => d.ManagerId)
                    .HasConstraintName("fk_ManagerId");
            });

            modelBuilder.Entity<Leave>(entity =>
            {
                entity.Property(e => e.LeaveEndDate).HasColumnType("date");

                entity.Property(e => e.LeaveReason)
                    .IsRequired()
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.LeaveStartDate).HasColumnType("date");

                entity.Property(e => e.LeaveStatus)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasDefaultValueSql("('Pending')");

                entity.Property(e => e.LeaveType)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
