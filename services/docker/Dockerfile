FROM jboss/wildfly
ADD challenger-services.war /opt/jboss/wildfly/standalone/deployments/
ADD mysql-connector-java-5.1.36-bin.jar /opt/jboss/wildfly/standalone/deployments/
ADD standalone.xml /opt/jboss/wildfly/standalone/configuration/standalone.xml
EXPOSE 8080
EXPOSE 9990
