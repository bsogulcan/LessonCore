using Abp.Authorization.Users;
using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson.Authorization.Users
{
    public class UserPartOutPut:Entity<long>
    {
        public string UserName { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string EmailAddress { get; set; }
        public List<UserRole> Roles { get; set; }
    }
}
