const discord = require('discord.js')
exports.run = async (client, message) => {

    let embed1 = new discord.RichEmbed()
        .setAuthor('Termos', client.user.avatarURL, 'https://fantasyhosting.com.br/TERMOS.pdf')
        .setDescription('Escolhe uma categoria para te informar sobre os nossos termos!')
        .addField('A empresa', '> 💼')
        .addField('Conteúdo não permitido', '> 🚫')
        .addField('Uso de Hardware Minecraf', '> 📄')
        .addField('Uso de Hardware VPS', '> 🖥️')
        .addField('Proteção Anti-DDOS', '> 📢')
        .addField('Arquivos e Backups', '> 📨')
        .addField('Suporte ao Cliente', '> 📎')
        .addField('Prazo de Entrega', '> 📬')
        .addField('Politica de Reembolso', '> 💸')
        .addField('Politica de Privacidade', '> 🛂')
        .addField('Suspensão e Cancelamento', '> 🛑')
        .addField('Encerramento de Contrato ', '> 🏬')
        .setFooter('Fantasy Hosting')
        .setColor('#ffffff')

        let embed2 = new discord.RichEmbed()
        .setAuthor('Termos', client.user.avatarURL, 'https://fantasyhosting.com.br/TERMOS.pdf')
        .setFooter('Fantasy Hosting')
        .setTitle('A empresa')
        .setDescription('Termos de utilização e prestação de serviços referente a empresa registrada sob CNPJ 36.119.719/0001-93, cuja razão social APARECIDA ROSA DOS SANTOS PESSINI 96943882953 representada pelo seu nome fantasia “FANTASYHOST INC.” sediada na cidade de FOZ DO IGUAÇU - PR presta seus serviços de hospedagem na internet através do seu website acessado pelo seu endereço eletrônico ”fantasyhosting.com.br”.')
        .setColor('#692517')

        let embed3 = new discord.RichEmbed()
        .setAuthor('Termos', client.user.avatarURL, 'https://fantasyhosting.com.br/TERMOS.pdf')
        .setFooter('Fantasy Hosting')
        .setTitle('Conteúdo não permitido')
        .setDescription('Em hipótese alguma vamos permitir o uso dos seguintes softwares/aplicativos/códigos em nossos servidores:\n • Qualquer aplicativo que possa prejudicar outros usuários do serviço;\n • Qualquer aplicativo ou código malicioso que tenha como objetivo burlar alguma limitação imposta pela FANTASYHOST; Qualquer aplicativo que contenha conteúdo pornográfico ou que exponha dados de qualquer outra pessoa sem ser o responsável pela hospedagem;\n • Qualquer aplicativo que consuma banda o suficiente do servidor ao ponto de prejudicar outros clientes;\n• Qualquer aplicativo que viole outra clausula imposta neste arquivo de Termos de Serviço.\n• Servidores proxy públicos de qualquer tipo que qualquer pessoa possa utilizar utilizando credenciais fornecidas em sites ou sem uso de senha.\n• Mineração de moedas virtuais ou aplicativos similares que tenham finalidade realizar a mineração de bens virtuais sejam eles pontos ou moedas.\nPara realizar a utilização de qualquer tipo de serviço de proxy ou similares o cliente deve entrar em contato com nosso suporte requerendo autorização para a utilização do mesmo estando sujeito a cancelamento imediato sem ressarcimento de quaisquer valores pagos caso tal autorização não for emitida. Qualquer tentativa de realizar qualquer ação que resulte em qualquer item citado acima a FANTASYHOST tem o direito de cancelar o serviço imediatamente sem ressarcimento de quaisquer valores pagos. ')
        .setColor('#919191')

        let embed4 = new discord.RichEmbed()
        .setAuthor('Termos', client.user.avatarURL, 'https://fantasyhosting.com.br/TERMOS.pdf')
        .setFooter('Fantasy Hosting')
        .setTitle('Uso de Hardware Minecraft')
        .setDescription('Ao adquirir um serviço de Hospedagem de Minecraft, você está ciente que está adquirindo um espaço em um servidor dedicado onde estão alocados outros servidores de outros clientes, sendo assim você esta adquirindo um plano compartilhado, você tem direito de uso a 100% da memória e disco contratados, porem o uso de banda se restringe a 5% da banda total do servidor dedicado onde seu servidor esta alocado. O uso de processamento é liberado até 8 núcleos de 4.2GHz, caso você tenha alguma configuração que necessite informar a quantidade de núcleos de processamento, informe o numero 8. não impõe nenhum limite de uso de CPU em termos de números, a partir do momento que o seu servidor estiver utilizando muito processamento a ponto de prejudicar o desempenho de servidores vizinhos, lembre-se, você está adquirindo uma vaga em um servidor dedicado e não um serviço dedicado.')
        .setColor('#7a5353')

        let embed5 = new discord.RichEmbed()
        .setAuthor('Termos', client.user.avatarURL, 'https://fantasyhosting.com.br/TERMOS.pdf')
        .setFooter('Fantasy Hosting')
        .setTitle('Uso de Hardware VPS')
        .setDescription('Ao adquirir um servidor VPS da FANTASYHOST você está adquirindo um servidor VPS do tipo KVM onde o Kernel é próprio, geralmente este tipo de virtualização e o mais utilizado por obter um melhor desempenho. Você tem direito de uso a 5% da banda total do dedicado, os demais recursos são controlados pelo próprio software de virtualização. Qualquer tentativa de utilizar o VPS para Ataques DoS ou DDoS resultará na suspensão e cancelamento do servidor VPS imediatamente assim que for identificado. Qualquer tentativa de utilizar o VPS para Mineracao de BitCoins ou outras moedas virtuais resultara na suspensão e cancelamento do servidor VPS imediatamente assim que for identificado. Qualquer processo que o VPS do cliente esteja executando que prejudique outro cliente resultara na suspensão do VPS até que o problema seja resolvido pelo dono do servidor VPS. ')
        .setColor('#753e3e')

        let embed6 = new discord.RichEmbed()
        .setAuthor('Termos', client.user.avatarURL, 'https://fantasyhosting.com.br/TERMOS.pdf')
        .setFooter('Fantasy Hosting')
        .setTitle('Proteção Anti-DDOS')
        .setDescription(' FANTASYHOST oferece um serviço de proteção ANTI-DDOS sem limites, você pode receber um ataque de qualquer tamanho sem limite de quantidade de ataques mitigados por mês sem nenhum custo adicional. O servidor possui diversas regras em seu firewall sendo uma delas em caso de um ataque ICMP Flood o envio/recebimento de pacotes ICMP do servidor é totalmente bloqueado ate o final do ataque. A FANTASYHOST não garante que nossos firewalls capturem todos os pacotes malintencionados do tipo UDP e do tipo Layer 7 (HTTP-Request) por se tratar de um ataque generalizado onde geralmente são utilizados bot-nets (conexões reais). ')
        .setColor('#910a0a')

        let embed7 = new discord.RichEmbed()
        .setAuthor('Termos', client.user.avatarURL, 'https://fantasyhosting.com.br/TERMOS.pdf')
        .setFooter('Fantasy Hosting')
        .setTitle('Arquivos e Backups')
        .setDescription('A FANTASYHOST não se responsabiliza em hipótese alguma em caso de perda de qualquer arquivo que esteja alocado em um de nossos serviços contratados, o cliente é responsável por manter um backup de seus arquivos em dia. A FANTASYHOST realiza backups periodicamente para maior segurança para os nossos clientes, em caso de perda de qualquer arquivo que seja de extrema importância entre em contato com nosso suporte imediatamente após a perda, uma taxa de serviço poderá ser cobrada se a reaquisição deste arquivo demandar muito tempo de um de nossos operadores. ')
        .setColor('#d40d0d')

        let embed8 = new discord.RichEmbed()
        .setAuthor('Termos', client.user.avatarURL, 'https://fantasyhosting.com.br/TERMOS.pdf')
        .setFooter('Fantasy Hosting')
        .setTitle('Suporte ao Cliente')
        .setDescription('A FANTASYHOST oferece suporte ao cliente 24 horas por dia 365 dias por ano pelo site na forma de tickets e diretamente pelos nossos e-mails de contato oficiais, porém, não determinamos um prazo de resposta, tenha em mente que o nosso de atendimento comercial é de Segunda à Sexta das 12h às 22h. Eventualmente você será respondido fora deste horário. ')
        .setColor('#ff3d3d')

        let embed9 = new discord.RichEmbed()
        .setAuthor('Termos', client.user.avatarURL, 'https://fantasyhosting.com.br/TERMOS.pdf')
        .setFooter('Fantasy Hosting')
        .setTitle('Prazo de Entrega')
        .setDescription('Todos os serviços com exceção dos servidores dedicados são ativados e enviados automaticamente imediatamente após a confirmação de pagamento em nosso sistema. Os servidores dedicados possuem um prazo de entrega de até 72 horas ÚTEIS, sendo que após este período caso o serviço ainda não tenha sido entregue o cliente pode solicitar reembolso total do valor pago. ')
        .setColor('#ff7070')

        let embed10 = new discord.RichEmbed()
        .setAuthor('Termos', client.user.avatarURL, 'https://fantasyhosting.com.br/TERMOS.pdf')
        .setFooter('Fantasy Hosting')
        .setTitle('Politica de Reembolso')
        .setDescription('Ao contratar qualquer serviço da FANTASYHOST você pode solicitar reembolso em até 7 dias após a ativação do serviço, exceto para os seguintes serviços: Servidores dedicados: os servidores dedicados é uma linha de servidores a qual o cliente loca um servidor físico totalmente dedicado sem interferência externa onde o cliente e apenas ele possui acesso a tal serviço, após a ativação do mesmo não é possível solicitar qualquer tipo de reembolso. ')
        .setColor('#f08686')

        let embed11 = new discord.RichEmbed()
        .setAuthor('Termos', client.user.avatarURL, 'https://fantasyhosting.com.br/TERMOS.pdf')
        .setFooter('Fantasy Hosting')
        .setTitle('Politica de Privacidade')
        .setDescription('A FANTASYHOST jamais em hipótese alguma vai pedir qualquer tipo de senha de nossos serviços. Todos os seus arquivos são sigilosos e todo o acesso ao site e criptografado por um Certificado SSL de altíssima segurança, o mesmo utilizado por muitos bancos. A FANTASYHOST somente vai liberar acesso a logs de arquivos de contas de clientes caso uma ação judicial for movida contra a FANTASYHOST, por favor esteja ciente de todos os seus atos utilizando nossos serviços. ')
        .setColor('#c97979')

        let embed12 = new discord.RichEmbed()
        .setAuthor('Termos', client.user.avatarURL, 'https://fantasyhosting.com.br/TERMOS.pdf')
        .setFooter('Fantasy Hosting')
        .setTitle('Suspensão e Cancelamento')
        .setDescription('A FANTASYHOST reserva o direito de suspender e cancelar qualquer serviço que não venha a ter um pagamento dentro dos limites da data de vencimento. O cliente tem até o dia do vencimento do serviço para efetuar o pagamento sem taxas, após o vencimento da fatura vamos aplicar uma taxa de atraso por mais 3 (três) dias após o vencimento antes de ser suspenso o serviço, após 7 dias de vencimento o serviço será cancelado e todos os arquivos serão automaticamente apagados do sistema, caso você tenha um problema com o seu  meio de pagamento, abra um ticket em nosso site para que o caso seja tratado de acordo com a situação. Após a conta ser suspensa, todo o acesso aos arquivos do servidor e painel de controle são bloqueados, para restaurar o acesso basta efetuar o pagamento da fatura. A FANTASYHOST não se responsabiliza por perda de arquivos desta maneira, sendo que disponibilizamos um limite de 7 dias após o vencimento para a regularização da conta. ')
        .setColor('#994545')

        let embed13 = new discord.RichEmbed()
        .setAuthor('Termos', client.user.avatarURL, 'https://fantasyhosting.com.br/TERMOS.pdf')
        .setFooter('Fantasy Hosting')
        .setTitle('Encerramento de Contrato ')
        .setDescription('Qualquer uma das partes poderá rescindir o presente contrato a qualquer momento durante seu período de vigência, mediante cancelamento do serviço. Sem prejuízo das cláusulas anteriores, poderá a FANTASYHOST, a seu exclusivo critério, negar a renovação de um serviço ativo respeitando a data de vencimento do mesmo ou negar a prestação de um novo serviço efetuando um reembolso integral do valor pago pelo cliente. ')
        .setColor('#852929')

        message.channel.send(embed1).catch(e => message.channel.send(embed1))
        .then(async (msg) => {
            await msg.react("💼")
            await msg.react("🚫")          
            await msg.react("📄")  
            await msg.react("🖥️")                    
            await msg.react("📢")
            await msg.react("📨")
            await msg.react("📎")
            await msg.react('📬')
            await msg.react("💸")
            await msg.react("🛂")
            await msg.react("🛑")
            await msg.react('🏬')


            const filter = (reaction, user) => ['💼', "🚫", "📄", "🖥️", "📢", "📨", "📎", "📬", "💸", "🛂", "🛑", '🏬'].includes(reaction.emoji.name) && user.id === message.author.id
            const collector = msg.createReactionCollector(filter, { time: 90000 })
            collector.on("collect", r => {
                switch (r.emoji.name) {
                    case '💼':
                        msg.edit(embed2)
                        break;
                    case '🚫':
                        msg.edit(embed3)
                        break;
                    case '📄':
                        msg.edit(embed4)
                        break;
                    case '🖥️':
                        msg.edit(embed5)                                  
                        break;
                    case '📢':
                        msg.edit(embed6)
                        break;
                    case '📨':
                        msg.edit(embed7)
                        break;
                    case '📎':
                        msg.edit(embed8)
                        break;                        
                    case '📬':
                        msg.edit(embed9)
                        break;                        
                    case '💸':
                        msg.edit(embed10)
                        break;
                    case '🛂':
                        msg.edit(embed11)
                        break;
                    case '🛑':
                        msg.edit(embed12)
                        break;                        
                    case '🏬':
                        msg.edit(embed13)
                        break;
}})})}