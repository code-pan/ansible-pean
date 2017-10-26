# Installs wixed infrustructure in a single server

## Requirements
install ansible in local machine.  
You should have your public key on remote machine.  
save in /etc/ansible/hosts the ip of your server.  

    ansible-galaxy install -r roles.txt -p roles.  


run this command to install on Remote server:

    ansible-playbook site.yml


in case the remote server has python3 (ubuntu 16.04 for ex)
    
    ansible-playbook site.yml -e 'ansible_python_interpreter=/usr/bin/python3'

in this case also replace in the file ./roles/geerlingguy.postgresql/defaults/main.yml
    postgresql_python_library: python3-psycopg2


