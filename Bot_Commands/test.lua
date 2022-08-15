while wait(1) do 
	Dif = 0
	local r = os.date("*t")
	if r["hour"]+Dif >= 13 then
		script.Parent.Collector.Visits.Text = (r["hour"]+Dif)-12 ..":"..r["min"]..":"..r["sec"].." PM"

	elseif r["hour"]+Dif <= 12 then 
		script.Parent.Collector.Visits.Text = r["hour"]+Dif..":"..r["min"]..":"..r["sec"].."AM"
end