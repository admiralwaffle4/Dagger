module.exports = {
    name: 'role',
    aliases: ['roles'],
    description: 'Shows the available roles to pick up.',
    execute (message, args) {
      if (message.guild.id === '721448802531278929') {
        if (!args.length || args[0] === 'list') {
          message.channel.send('The available roles are: Announcement Ping, Update Ping, and Support Ping. Do `-role {role name}` to get one.')
        } else if (args[0] === 'announcement') {
            if (message.member.roles.cache.has('722796406515171381')) {
              message.member.roles.remove(message.guild.roles.cache.get('722796406515171381'));
              message.channel.send('You have removed the role: Announcement Ping.')
          } else {
              message.member.roles.add(message.guild.roles.cache.get('722796406515171381'));
              message.channel.send('You have recieved the role: Announcement Ping.')
            }
        } else if (args[0] === 'update') {
            if (message.member.roles.cache.has('722796446528569366')) {
              message.member.roles.remove(message.guild.roles.cache.get('722796446528569366'));
              message.channel.send('You have removed the role: Update Ping.')
          } else {
              message.member.roles.add(message.guild.roles.cache.get('722796446528569366'));
              message.channel.send('You have recieved the role: Update Ping.')
          }
        } else if (args[0] === 'support') {
            if (message.member.roles.cache.has('722796483883302913')) {
              message.member.roles.remove(message.guild.roles.cache.get('722796483883302913'));
              message.channel.send('You have removed the role: Support Ping.')
          } else {
              message.member.roles.add(message.guild.roles.cache.get('722796483883302913'));
              message.channel.send('You have recieved the role: Support Ping.')
          }
        } else {
          message.channel.send('That is not a valid role to pick up.')
        }
    } else if (message.guild.id === '685289771043520521') {
      if (!args.length || args[0] === 'list') {
        message.channel.send('The available roles are: Partnership, Dead Chat, Announcement, Event, Giveaway, Debate/Poll, Fact of the Day, Battle, and Stream. Do `-role {role name}` to get one.')
      } else if (args[0] === 'partnership') {
          if (message.member.roles.cache.has('721920746766729267')) {
            message.member.roles.remove(message.guild.roles.cache.get('721920746766729267'));
            message.channel.send('You have removed the role: Partnership.')
        } else {
            message.member.roles.add(message.guild.roles.cache.get('721920746766729267'));
            message.channel.send('You have recieved the role: Partnership.')
          }
      } else if (args[0] === 'dead') {
          if (message.member.roles.cache.has('685309613901611018')) {
            message.member.roles.remove(message.guild.roles.cache.get('685309613901611018'));
            message.channel.send('You have removed the role: Dead Chat.')
        } else {
            message.member.roles.add(message.guild.roles.cache.get('685309613901611018'));
            message.channel.send('You have recieved the role: Dead Chat.')
        }
      } else if (args[0] === 'announcement') {
          if (message.member.roles.cache.has('689516809669443686')) {
            message.member.roles.remove(message.guild.roles.cache.get('689516809669443686'));
            message.channel.send('You have removed the role: Announcement.')
        } else {
            message.member.roles.add(message.guild.roles.cache.get('689516809669443686'));
            message.channel.send('You have recieved the role: Announcement.')
        }
      } else if (args[0] === 'event') {
          if (message.member.roles.cache.has('689516992113148025')) {
            message.member.roles.remove(message.guild.roles.cache.get('689516992113148025'));
            message.channel.send('You have removed the role: Event.')
        } else {
            message.member.roles.add(message.guild.roles.cache.get('689516992113148025'));
            message.channel.send('You have recieved the role: Event.')
          }
      } else if (args[0] === 'giveaway') {
          if (message.member.roles.cache.has('689517032517271577')) {
            message.member.roles.remove(message.guild.roles.cache.get('689517032517271577'));
            message.channel.send('You have removed the role: Giveaway.')
          } else {
              message.member.roles.add(message.guild.roles.cache.get('689517032517271577'));
              message.channel.send('You have recieved the role: Giveaway.')
          }
        } else if (args[0] === 'debate/poll' || args[0] === 'debate') {
            if (message.member.roles.cache.has('689517077148467215')) {
              message.member.roles.remove(message.guild.roles.cache.get('689517077148467215'));
              message.channel.send('You have removed the role: Debate/Poll.')
            } else {
                message.member.roles.add(message.guild.roles.cache.get('689517077148467215'));
                message.channel.send('You have recieved the role: Debate/Poll.')
            }
       } else if (args[0] === 'fact') {
           if (message.member.roles.cache.has('689517265766711374')) {
             message.member.roles.remove(message.guild.roles.cache.get('689517265766711374'));
             message.channel.send('You have removed the role: Fact of the Day.')
           } else {
               message.member.roles.add(message.guild.roles.cache.get('689517265766711374'));
               message.channel.send('You have recieved the role: Fact of the Day.')
           }
       } else if (args[0] === 'battle') {
           if (message.member.roles.cache.has('720802379443994644')) {
             message.member.roles.remove(message.guild.roles.cache.get('720802379443994644'));
             message.channel.send('You have removed the role: Battle.')
           } else {
             message.member.roles.add(message.guild.roles.cache.get('720802379443994644'));
             message.channel.send('You have recieved the role: Battle.')
           }
         } else if (args[0] === 'stream') {
           if (message.member.roles.cache.has('723948990256906330')) {
             message.member.roles.remove(message.guild.roles.cache.get('723948990256906330'));
             message.channel.send('You have removed the role: Stream.')
           } else {
             message.member.roles.add(message.guild.roles.cache.get('723948990256906330'));
             message.channel.send('You have recieved the role: Strean.')
           }
          } else {
             message.channel.send('That is not a valid role to pick up.')
          }

   } else {
     message.channel.send('This server has no available roles to pick up.')
   }
 },
};
/* Sword's Server roles: (Guild ID: 721448802531278929)
announcement: 722796406515171381
update: 722796446528569366
support: 722796483883302913 */
// --------------------------------------------------------
/* Bongo's Diner roles:(Guild ID: 685289771043520521)
Partnership: 721920746766729267
dead chat: 685309613901611018
announcement: 689516809669443686
event: 689516992113148025
giveaway: 689517032517271577
debate/poll: 689517077148467215
fact of the day: 689517265766711374
battle: 720802379443994644
stream:  723948990256906330*/
// ----------------------------------------------------------
